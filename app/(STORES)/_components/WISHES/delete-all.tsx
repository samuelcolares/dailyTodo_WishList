"use client";
import AlertModal from "@/components/modal/alert-modal";
import { Button } from "@/components/ui/button";
import { deleteAllWishes, wishCount } from "@/providers/features/wish";
import { CopyX } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DeleteAll = () => {
  const dispatch = useDispatch();
  const wishes = useSelector(wishCount);
  const [open, setOpen] = useState<boolean>(false);
  const closeAlert = () => setOpen(false);
  const openAlert = () => setOpen(true);

  const deleteAll = () => {
    localStorage.setItem("wishes", JSON.stringify([]));
    dispatch(deleteAllWishes());
    closeAlert();
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={closeAlert}
        onConfirm={deleteAll}
        title="This action cannot be undone"
        description={`Deleting all wishes ( ${wishes.length} )`}
      />
      <Button
        className="px-2"
        variant={"destructive"}
        onClick={openAlert}
        disabled={wishes.length < 1}
      >
        <CopyX />
      </Button>
    </>
  );
};

export default DeleteAll;
