"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { removeWish, wishCount } from "@/providers/features/wish";
import { Wish } from "@/types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateStatus = ({ id }: { id: string | unknown }) => {
  const [x, setX] = useState<boolean>(false);
  const { toast } = useToast();
  const dispatch = useDispatch();
  const wishes = useSelector(wishCount);
  const wish = wishes.find((item: Wish) => item.id === id);
  const deleteWish = () => {
    const local: Wish[] = JSON.parse(localStorage.getItem("wishes")!);
    const filtered = local.filter((wish) => wish.id !== id);
    localStorage.setItem("wishes", JSON.stringify(filtered));

    dispatch(removeWish({ id }));
  };

  const update = () => {
    return toast({
      description: (
        <div>
          Complete{" "}
          <span className="text-primary border-b border-primary">
            {wish?.wish}
          </span>{" "}
          ?
        </div>
      ),
      action: (
        <div className="flex items-center gap-2">
          <ToastAction altText="Confirm" onClick={deleteWish}>
            Confirm
          </ToastAction>
          <ToastAction
            altText="Cancel"
            className="border-transparent bg-destructive hover:bg-destructive/90"
            onClick={() => {
              setX(false);
            }}
          >
            Cancel
          </ToastAction>
        </div>
      ),
    });
  };
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        onCheckedChange={update}
        checked={x}
        onClick={() => {
          setX(true);
        }}
      />
    </div>
  );
};

export default UpdateStatus;
