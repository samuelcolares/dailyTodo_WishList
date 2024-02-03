"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { UpdateWishForm } from "@/app/(TODO)/_components/WISHES/update-wish-form";
type UpdateWishModalProps = {
  id: string;
  wish: string;
  price: string;
  priority: string;
  isOpen: boolean;
  onClose: () => void;
};

const UpdateWishModal: React.FC<UpdateWishModalProps> = ({
  isOpen,
  onClose,
  id,
  wish,
  priority,
  price
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Modal
      title={"Update Item"}
      description={""}
      isOpen={isOpen}
      onClose={onClose}
    >
      <UpdateWishForm
        id={id}
        initialPriority={priority}
        initialWish={wish}
        initialPrice={price}
        onClose={onClose}
      />
    </Modal>
  );
};

export default UpdateWishModal;
