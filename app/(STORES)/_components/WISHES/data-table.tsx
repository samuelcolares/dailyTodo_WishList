"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { taskCount } from "@/providers/features/tasks";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { silk } from "@/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { wishCount } from "@/providers/features/wish";
import { cn, formatterToCurrency } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const wishes = useSelector(wishCount);
  const PricesSum = wishes.reduce((acc, curr) => acc + +curr.price, 0);
  const formatedPrice = formatterToCurrency(PricesSum);

  return (
    <>
      <div className="flex justify-between items-end pr-1 text-sm text-muted-foreground">
        <div className="flex items-center pb-1 gap-2">
          <Input
            placeholder="Filter by item name"
            value={(table.getColumn("wish")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("wish")?.setFilterValue(event.target.value)
            }
            className="max-w-sm w-[200px]"
          />
          <div className="w-[200px]">
            <Select
              onValueChange={(event: string) => {
                if (event === "None") {
                  table.getColumn("priority")?.setFilterValue("");
                } else {
                  table.getColumn("priority")?.setFilterValue(event);
                }
              }}
              defaultValue={
                (table.getColumn("priority")?.getFilterValue() as string) ?? ""
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="None">None</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className={cn("flex items-center gap-2", silk.className)}>
          <p>
            {wishes.length > 1
              ? `${wishes.length} wishes,`
              : `${wishes.length} wish,`}
          </p>
          <p>Total of {formatedPrice}</p>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
