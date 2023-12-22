"use client";
import { fetchTasks, taskCount } from "@/providers/features/tasks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Clock from "react-live-clock";
import { AddTaskForm } from "./add-task-form";
import { AppDispatch } from "@/providers/store";
import { cn, refreshTasks } from "@/lib/utils";
import DeleteAll from "./delete-all";
import { silk } from "@/fonts";

const TasksTable = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const tasks = useSelector(taskCount);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    refreshTasks();
    dispatch(fetchTasks());
    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className={cn("text-xl", silk.className)}>
        <Clock
          format={"dddd, MMMM Mo, YYYY, HH:mm:ss"}
          ticking
          timezone={"Brazil/East"}
          className="flex justify-center py-6"
          locale="br"
        />
      </div>
      <DataTable columns={columns} data={tasks} />
      <div className="flex justify-between items-center">
        <AddTaskForm />
        <DeleteAll />
      </div>
    </>
  );
};

export default TasksTable;
