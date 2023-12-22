"use client";
import AlertModal from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { deleteAllTasks, taskCount } from "@/providers/features/tasks";
import { CopyX } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DeleteAll = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(taskCount);
  const [open, setOpen] = useState<boolean>(false);
  const closeAlert = () => setOpen(false);
  const openAlert = () => setOpen(true);

  const deleteAll = () => {
    localStorage.setItem("tasks", JSON.stringify([]));
    dispatch(deleteAllTasks());
    closeAlert();
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={closeAlert}
        onConfirm={deleteAll}
        title="This action cannot be undone"
        description={`Deleting all tasks ( ${tasks.length} )`}
      />
      <Button
        className="px-2"
        variant={"destructive"}
        onClick={openAlert}
        disabled={tasks.length < 1}
      >
        <CopyX />
      </Button>
    </>
  );
};

export default DeleteAll;
