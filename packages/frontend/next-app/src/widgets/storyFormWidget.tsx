"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StorySchemaDAO } from "@libs/types";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import api from "@/api/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StoryFormWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  story: z.infer<typeof StorySchemaDAO>;
}

export default function StoryFormWidget({
  story,
  className,
}: StoryFormWidgetProps) {
  const form = useForm<z.infer<typeof StorySchemaDAO>>({
    mode: "onChange",
    resolver: zodResolver(StorySchemaDAO),
    defaultValues: {
      type: story.type ?? "story",
      description: story.description ?? "",
      content: story.content ?? "",
      point: story.point ?? 0,
    },
  });

  return (
    <div className={className}>
      <Form {...form}>
        <form
          className="flex gap-4 items-end bg-slate-50"
          onSubmit={form.handleSubmit(async (value) => {
            const result = await api.post(
              process.env.NEXT_PUBLIC_API_URL + "/story",
              value,
            );
            console.log("id", result);
          })}
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="StoryType" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="story">story</SelectItem>
                        <SelectItem value="spike">spike</SelectItem>
                        <SelectItem value="epic">epic</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* <FormField
            control={form.control}
            name="point"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>point</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}

          <Button>submit</Button>
        </form>
      </Form>
    </div>
  );
}
