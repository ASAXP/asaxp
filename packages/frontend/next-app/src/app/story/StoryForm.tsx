"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Form, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { storySchema } from "@libs/types";
import { Button } from "@/components/ui/button";

export default function StoryForm() {
  const form = useForm({
    defaultValues: {
      description: "",
    },
    resolver: zodResolver(storySchema),
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
        <FormField
          control={form.control}
          name="description"
          render={() => {
            return (
              <FormItem>
                <FormLabel>묘사</FormLabel>
                <FormControl>
                  <Input placeholder="나는 <어떤 유저>로서 <>를 위해 <>기능을 원한를 위해 <>기능을 원한다다" />
                </FormControl>
                <FormDescription>
                  this is your story description
                </FormDescription>
              </FormItem>
            );
          }}
        />
        <Button>submit</Button>
      </form>
    </Form>
  );
}
