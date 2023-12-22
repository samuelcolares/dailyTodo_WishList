"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useDispatch, useSelector } from "react-redux";
import { Wish } from "@/types";
import { v4 } from "uuid";
import { silk } from "@/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { addWish, wishCount } from "@/providers/features/wish";

const formSchema = z.object({
  wish: z
    .string()
    .min(5, { message: "Minimum 5 characters" })
    .max(50, { message: "Maximum 50 characters" }),
  priority: z.string(),
});

export const AddTaskForm = () => {
  const dispatch = useDispatch();
  const wishes: Wish[] = useSelector(wishCount);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wish: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const wish: Wish = {
      id: v4(),
      wish: values.wish,
      completed: false,
      priority: values.priority as "High" | "Normal" | "Low",
    };
    const exist = wishes.some((item) => wish.wish === item.wish);
    if (exist) {
      toast({
        description: "Already exist a task with this name.",
      });
      return;
    } else {
      dispatch(addWish(wish));
      localStorage.setItem("wishes", JSON.stringify([...wishes, wish]));
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex py-2 gap-2">
        <FormField
          control={form.control}
          name="wish"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter a item" {...field} className="py-2" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem className="w-[150px]">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Normal">Normal</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={silk.className}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
