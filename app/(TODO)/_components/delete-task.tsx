"use client";
import { Button } from "@/components/ui/button";
import { removeTask } from "@/providers/features/tasks";
import { Task } from "@/types";
import { Trash2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const DeleteTask = ({ id }: { id: string | unknown }) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    const local: Task[] = JSON.parse(localStorage.getItem("tasks")!);
    const filtered = local.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(filtered));

    dispatch(removeTask({ id }));
  };
  return (
    <Button variant={"destructive"} onClick={deleteTask}>
      <Trash2 />
    </Button>
  );
};

export default DeleteTask;
