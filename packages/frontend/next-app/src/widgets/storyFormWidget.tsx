"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const formSchema = z.object({
  description: z.string({ message: "description needed" }),
});

export default function StoryFormWidget() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      description: "",
    },
    resolver: zodResolver(formSchema),
  });
  return (
    <Form {...form}>
      <form
        className="flex gap-4 items-end bg-slate-50"
        onSubmit={form.handleSubmit((value) => {
          console.log(value, "value submitted");
        })}
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>look</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="나는 <어떤 유저>로서 <>를 위해 <>기능을 원한다"
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <Button>submit</Button>
      </form>
    </Form>
  );
}
