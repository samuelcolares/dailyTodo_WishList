"use client";
import React, { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import AlertModal from "@/components/modal/alert-modal";
import { PenBox, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import UpdateModal from "@/components/modal/form-modal";
import { removeTask } from "@/providers/features/tasks";
type props = {
  children: React.ReactNode;
  id: string;
  task: string;
};

import { Task } from "@/types";

const CustomCTXMenu: React.FC<props> = ({ children, task, id }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);

  const dispatch = useDispatch();

  const deleteTask = () => {
    const local: Task[] = JSON.parse(localStorage.getItem("tasks")!);
    const filtered = local.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(filtered));

    dispatch(removeTask({ id }));
    setOpen(false);
  };

  const closeAlert = () => setOpen(false);
  const openAlert = () => setOpen(true);
  const closeAlert2 = () => setOpenE(false);
  const openAlert2 = () => setOpenE(true);

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={closeAlert}
        onConfirm={deleteTask}
        title="This action cannot be undone"
        description={`Deleting Task: '${task}'`}
      />
      <UpdateModal
        id={id as string}
        task={task as string}
        isOpen={openE}
        onClose={closeAlert2}
      />
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent>
          <div>
            <p className="px-2 py-1.5 text-sm font-semibold">Settings</p>
            <div className="-mx-1 my-1 h-px bg-muted" />
            <div
              className="gap-2 cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-white/20"
              onClick={openAlert2}
            >
              <PenBox className="w-4 h-4" />
              <span>Edit</span>
            </div>
            <div
              className="gap-2 cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-white/20"
              onClick={openAlert}
            >
              <Trash className="w-4 h-4" />
              <span>Delete</span>
            </div>
          </div>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
};

export default CustomCTXMenu;
