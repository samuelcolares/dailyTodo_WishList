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
import { Wish } from "@/types";

import UpdateModal from "@/components/modal/form-modal";
import { silk } from "@/fonts";
import { removeWish } from "@/providers/features/wish";
import UpdateWishModal from "@/components/modal/form-wish-modal";

const Actions = ({
  id,
  wish,
  priority,
}: {
  id: string | unknown;
  wish: string | unknown;
  priority: string | unknown;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openE, setOpenE] = useState<boolean>(false);

  const dispatch = useDispatch();

  const deleteWish = () => {
    const local: Wish[] = JSON.parse(localStorage.getItem("wishes")!);
    const filtered = local.filter((wish) => wish.id !== id);
    localStorage.setItem("wishes", JSON.stringify(filtered));

    dispatch(removeWish({ id }));
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
        onConfirm={deleteWish}
        title="This action cannot be undone"
        description={`Deleting Wish: '${wish}'`}
      />
      <UpdateWishModal
        priority={priority as string}
        id={id as string}
        wish={wish as string}
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
          <DropdownMenuLabel className={silk.className}>
            Settings
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-2 cursor-pointer"
            onClick={openAlert2}
          >
            <PenBox className="w-4 h-4" />
            <span className={silk.className}>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2 cursor-pointer"
            onClick={openAlert}
          >
            <Trash className="w-4 h-4" />
            <span className={silk.className}>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Actions;
