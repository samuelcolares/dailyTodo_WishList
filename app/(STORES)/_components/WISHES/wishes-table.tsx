"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { AddTaskForm } from "./add-wish-form";
import { AppDispatch } from "@/providers/store";
import DeleteAll from "./delete-all";
import { fetchWishes, wishCount } from "@/providers/features/wish";

const WishesTable = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const wishes = useSelector(wishCount);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchWishes());
    setIsMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <DataTable columns={columns} data={wishes} />
      <div className="flex justify-between items-center">
        <AddTaskForm />
        <DeleteAll />
      </div>
    </>
  );
};

export default WishesTable;
