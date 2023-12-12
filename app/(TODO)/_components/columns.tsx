"use client";
import { Task } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import UpdateStatus from "./update-status";
import UpdateAll from "./update-all";
import Actions from "./actions";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "status",
    header: () => {
      return <UpdateAll />;
    },
    cell: ({ row }) => {
      const id = row.getValue("id");
      return <UpdateStatus id={id} />;
    },
  },
  {
    accessorKey: "completed",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const completed = row.getValue("completed");
      return (
        <>
          {completed === false && <span>Pending</span>}
          {completed && <span>Completed</span>}
        </>
      );
    },
  },
  {
    accessorKey: "task",
    header: () => <div className="">Tasks</div>,
  },
  {
    accessorKey: "id",
    header: () => <div className="">Actions</div>,
    cell: ({ row }) => (
      <div className="">
        <Actions id={row.getValue("id")} task={row.getValue("task")} />
      </div>
    ),
  },
];

/**
|--------------------------------------------------
"use client";

import { Button } from "@/components/ui/button";
import { Task } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import DeleteTask from "./delete-task";
import UpdateStatus from "./update-status";
import { Checkbox } from "@/components/ui/checkbox";
import UpdateAll from "./update-all";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "status",
    header: () => {
      return <UpdateAll />;
    },
    cell: ({ row }) => {
      const id = row.getValue("id");
      return <UpdateStatus id={id} />;
    },
  },
  {
    accessorKey: "completed",
    header: () => <div className="">Status</div>,
    cell: ({ row }) => {
      const completed = row.getValue("completed");
      return (
        <>
          {completed === false && <span>Pending</span>}
          {completed && <span>Completed</span>}
        </>
      );
    },
  },
  {
    accessorKey: "task",
    header: () => <div className="text-center">Tasks</div>,
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const id = row.getValue("id");
      return <div className="flex justify-center"><DeleteTask id={id} /></div>;
    },
  },
];



|--------------------------------------------------
*/
