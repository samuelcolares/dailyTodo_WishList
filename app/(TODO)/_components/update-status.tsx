"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { taskCount, updateTask } from "@/providers/features/tasks";
import { Task } from "@/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateStatus = ({ id }: { id: string | unknown }) => {
  const tasks = useSelector(taskCount);
  const dispatch = useDispatch();
  const task = tasks.find((item) => item.id === id);
  const storageTasks: Task[] = JSON.parse(localStorage.getItem("tasks")!);
  const i = storageTasks.findIndex((item: Task) => item.id === id);
  const update = () => {
    if (task?.completed) {
      storageTasks[i].completed = false;
      localStorage.setItem("tasks", JSON.stringify(storageTasks));
      dispatch(updateTask({ id, completed: false }));
    } else {
      storageTasks[i].completed = true;
      localStorage.setItem("tasks", JSON.stringify(storageTasks));
      dispatch(updateTask({ id, completed: true }));
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Checkbox checked={task?.completed} onCheckedChange={update} />
    </div>
  );
};

export default UpdateStatus;
