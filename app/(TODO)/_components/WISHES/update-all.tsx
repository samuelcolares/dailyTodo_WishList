"use client";
import { deleteAllWishes, wishCount } from "@/providers/features/wish";
import { Wish } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { ListChecksIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const UpdateAll = () => {
  const { toast } = useToast();
  const wishes = useSelector(wishCount);
  const dispatch = useDispatch();

  const update = () => {
    return (
      wishes.length > 0 &&
      toast({
        description: "Complete all Items?",
        action: (
          <div className="flex items-center gap-2">
            <ToastAction
              altText="Confirm"
              onClick={() => {
                dispatch(deleteAllWishes());
              }}
            >
              Confirm
            </ToastAction>
            <ToastAction
              altText="Cancel"
              className="border-transparent bg-destructive hover:bg-destructive/90"
            >
              Cancel
            </ToastAction>
          </div>
        ),
      })
    );
  };
  return (
    <div className="flex items-center">
      <ListChecksIcon
        onClick={update}
        className={cn("", wishes.length > 0) && "cursor-pointer"}
      />
    </div>
  );
};

export default UpdateAll;
