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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useDispatch, useSelector } from "react-redux";
import { updateTaskLabel, taskCount } from "@/providers/features/tasks";
import { Task } from "@/types";
import { silk } from "@/fonts";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  task: z
    .string()
    .min(5, { message: "Minimum 5 characters" })
    .max(50, { message: "Maximum 50 characters" }),
  priority: z.string(),
});

type UpdateTaskForm = {
  initialTask: string;
  initialPriority: string;
  id: string;
  onClose: () => void;
};

export const UpdateTaskForm: React.FC<UpdateTaskForm> = ({
  initialTask,
  initialPriority,
  id,
  onClose,
}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(taskCount);
  const storageTasks: Task[] = JSON.parse(localStorage.getItem("tasks")!);
  const currentTask = storageTasks.findIndex((item) => item.id === id);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: initialTask,
      priority: initialPriority,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const exist = tasks.some((item) => values.task === item.task);
    const itself = values.task === initialTask;

    if (itself || !exist) {
      dispatch(
        updateTaskLabel({ id, task: values.task, priority: values.priority })
      );
      storageTasks[currentTask].task = values.task;
      storageTasks[currentTask].priority = values.priority as
        | "High"
        | "Normal"
        | "Low";
      localStorage.setItem("tasks", JSON.stringify(storageTasks));
      onClose();
    } else if (exist) {
      toast({
        description: "Already exist a task with this name.",
      });
      return;
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
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button
            variant={"outline"}
            onClick={onClose}
            type="button"
            className={silk.className}
          >
            Cancel
          </Button>
          <Button variant={"default"} type="submit" className={silk.className}>
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
