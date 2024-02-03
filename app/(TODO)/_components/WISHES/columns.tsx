"use client";
import { Wish } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import UpdateStatus from "./update-status";
import UpdateAll from "./update-all";
import Actions from "./actions";
import { silk } from "@/fonts";


export const columns: ColumnDef<Wish>[] = [
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
    accessorKey: "wish",
    header: () => <div className={silk.className}>Item</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className={silk.className}>Price</div>,
    cell: ({row}) => {
      const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
       const formatPrice = +(row.getValue("price") as string)
      return <p>{formatter.format(formatPrice)}</p>
    }
  },
  {
    accessorKey: "priority",
    header: () => <div className={silk.className}>Priority</div>,
  },
  {
    accessorKey: "id",
    header: () => <div className={silk.className}>Actions</div>,
    cell: ({ row }) => (
      <div className="">
        <Actions
          id={row.getValue("id")}
          wish={row.getValue("wish")}
          priority={row.getValue("priority")}
          price={row.getValue("price")}
        />
      </div>
    ),
  },
];
