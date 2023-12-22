"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { taskCount, updateAllTasks } from "@/providers/features/tasks";
import { Task } from "@/types";
import { useDispatch, useSelector } from "react-redux";

const UpdateAll = () => {
  const tasks = useSelector(taskCount);
  const dispatch = useDispatch();
  const verification = tasks.every((item) => item.completed);
  const storageTasks: Task[] = JSON.parse(localStorage.getItem("tasks")!);

  const update = () => {
    if (verification) {
      storageTasks.forEach((item) => (item.completed = false));
      localStorage.setItem("tasks", JSON.stringify(storageTasks));
      dispatch(updateAllTasks({ completed: false }));
    } else {
      storageTasks.forEach((item) => (item.completed = true));
      localStorage.setItem("tasks", JSON.stringify(storageTasks));
      dispatch(updateAllTasks({ completed: true }));
    }
  };
  return (
    <div className="flex items-center">
      <Checkbox onCheckedChange={update} checked={verification} />
    </div>
  );
};

export default UpdateAll;
