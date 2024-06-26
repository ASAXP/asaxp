"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StoryForm() {
  const formSchema = z.object({
    description: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      description: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => {
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
