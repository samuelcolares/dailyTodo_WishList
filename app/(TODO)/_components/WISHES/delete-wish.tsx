"use client";
import { Button } from "@/components/ui/button";
import { removeWish } from "@/providers/features/wish";
import { Wish } from "@/types";
import { Trash2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const DeleteWish = ({ id }: { id: string | unknown }) => {
  const dispatch = useDispatch();

  const deleteWish = () => {
    const local: Wish[] = JSON.parse(localStorage.getItem("wishes")!);
    const filtered = local.filter((wish) => wish.id !== id);
    localStorage.setItem("wishes", JSON.stringify(filtered));

    dispatch(removeWish({ id }));
  };
  return (
    <Button variant={"destructive"} onClick={deleteWish}>
      <Trash2 />
    </Button>
  );
};

export default DeleteWish;
