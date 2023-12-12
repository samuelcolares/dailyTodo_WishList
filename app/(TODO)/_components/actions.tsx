import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PenBox, Settings, Trash } from "lucide-react";
import AlertModal from "@/components/modal/alert-modal";
import { useDispatch } from "react-redux";
import { Task } from "@/types";
import { removeTask } from "@/providers/features/tasks";
import UpdateModal from "../../../components/modal/form-modal";

const Actions = ({
  id,
  task,
}: {
  id: string | unknown;
  task: string | unknown;
}) => {
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

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground p-2">
            <Settings className="w-5 h-5" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-2 cursor-pointer"
            onClick={openAlert2}
          >
            <PenBox className="w-4 h-4" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2 cursor-pointer"
            onClick={openAlert}
          >
            <Trash className="w-4 h-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Actions;
