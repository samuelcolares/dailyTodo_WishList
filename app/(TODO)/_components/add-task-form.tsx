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
import { addTask, taskCount } from "@/providers/features/tasks";
import { Task } from "@/types";
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

const formSchema = z.object({
  task: z
    .string()
    .min(5, { message: "Minimum 5 characters" })
    .max(50, { message: "Maximum 50 characters" }),
  priority: z.string(),
});

export const AddTaskForm = () => {
  const dispatch = useDispatch();
  const tasks: Task[] = useSelector(taskCount);
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const task: Task = {
      id: v4(),
      task: values.task,
      completed: false,
      priority: values.priority as "High" | "Normal" | "Low",
    };
    const exist = tasks.some((item) => task.task === item.task);
    if (exist) {
      toast({
        description: "Already exist a task with this name.",
      });
      return;
    } else {
      dispatch(addTask(task));
      localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex py-2 gap-2">
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter a task" {...field} className="py-2" />
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
