import { Task } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { DateTime } from "luxon";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const refreshTasks = () => {
  const DT = DateTime.now();
  const local = localStorage.getItem("tasks-dt");
  const tasks = localStorage.getItem("tasks");
  if (local && tasks) {
    if (DT.day !== +JSON.parse(local)) {
      const refreshed: Task[] = JSON.parse(tasks);
      const b = refreshed.map((item) => {
        const newItem = { ...item };
        newItem.completed = false;
        return newItem;
      });
      localStorage.setItem("tasks-dt", JSON.stringify(DT.day));
      localStorage.setItem("tasks", JSON.stringify(b));
      return;
    }
  } else {
    localStorage.setItem("tasks-dt", JSON.stringify(DT.day));
    localStorage.setItem("tasks", JSON.stringify([]));
    return;
  }
};