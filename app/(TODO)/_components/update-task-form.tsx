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
import { updateTaskLabel, taskCount } from "@/providers/features/tasks";
import { Task } from "@/types";

const formSchema = z.object({
  task: z.string().min(2).max(50),
});

type UpdateTaskForm = {
  initialTask: string;
  id: string;
  onClose: () => void;
};

export const UpdateTaskForm: React.FC<UpdateTaskForm> = ({
  initialTask,
  id,
  onClose,
}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(taskCount);
  const storageTasks: Task[] = JSON.parse(localStorage.getItem("tasks")!);
  const currentTask = storageTasks.findIndex((item) => item.id === id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: initialTask,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const exist = tasks.some((item) => values.task === item.task);
    if (exist) {
      return;
    } else {
      dispatch(updateTaskLabel({ id, task: values.task }));
      storageTasks[currentTask].task = values.task;
      localStorage.setItem("tasks", JSON.stringify(storageTasks));
      onClose();
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col py-2 gap-4"
      >
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
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button variant={"outline"} onClick={onClose} type="button">
            Cancel
          </Button>
          <Button variant={"default"} type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
