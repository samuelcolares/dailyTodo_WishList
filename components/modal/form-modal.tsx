"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { UpdateTaskForm } from "@/app/(TODO)/_components/update-task-form";
type UpdateModalProps = {
  id: string;
  task: string;
  isOpen: boolean;
  onClose: () => void;
};

const UpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  id,
  task,
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
      title={"Update task"}
      description={""}
      isOpen={isOpen}
      onClose={onClose}
    >
      <UpdateTaskForm
        id={id}
        initialTask={task}
        onClose={onClose}
      />
    </Modal>
  );
};

export default UpdateModal;
