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
import { Wish } from "@/types";
import { silk } from "@/fonts";
import { useToast } from "@/components/ui/use-toast";
import { updateWishLabel, wishCount } from "@/providers/features/wish";

const formSchema = z.object({
  wish: z
    .string()
    .min(5, { message: "Minimum 5 characters" })
    .max(50, { message: "Maximum 50 characters" }),
  priority: z.string(),
});

type UpdateWishForm = {
  initialWish: string;
  initialPriority: string;
  id: string;
  onClose: () => void;
};

export const UpdateWishForm: React.FC<UpdateWishForm> = ({
  initialWish,
  initialPriority,
  id,
  onClose,
}) => {
  const dispatch = useDispatch();
  const wishes = useSelector(wishCount);
  const storageWishes: Wish[] = JSON.parse(localStorage.getItem("wishes")!);
  const currentWish = storageWishes.findIndex((item) => item.id === id);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wish: initialWish,
      priority: initialPriority,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const exist = wishes.some((item) => values.wish === item.wish);
    const itself = values.wish === initialWish;

    if (itself || !exist) {
      dispatch(
        updateWishLabel({ id, wish: values.wish, priority: values.priority })
      );
      storageWishes[currentWish].wish = values.wish;
      storageWishes[currentWish].priority = values.priority as
        | "High"
        | "Normal"
        | "Low";
      localStorage.setItem("wishes", JSON.stringify(storageWishes));
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
          name="wish"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter item new name"
                  {...field}
                  className="py-2"
                />
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
