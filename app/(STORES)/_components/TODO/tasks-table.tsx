"use client";
import { fetchTasks, taskCount } from "@/providers/features/tasks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "./data-table";
import { columns } from "./columns";

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
      <DataTable columns={columns} data={tasks} />
      <div className="flex justify-between items-center">
        <AddTaskForm />
        <DeleteAll />
      </div>
    </>
  );
};

export default TasksTable;
