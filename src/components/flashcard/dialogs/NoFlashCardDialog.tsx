"use client";
import AppRoutes from "@app/appRoutes";
import YesNoDialog from "@components/lib/dialogs/YesNoDialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NoFlashCardDialog() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const titleText = "Create new Flashcard?";
  const contentText =
    "It seems there are no flashcards. Do you want to get started by creating one?";
  const onNo = () => {
    setOpen(false);
    router.refresh();
  };
  const onYes = () => router.push(AppRoutes.flashCardRoutes.create);

  return (
    <YesNoDialog
      titleText={titleText}
      contentText={contentText}
      onNo={onNo}
      onYes={onYes}
      open={open}
    />
  );
}
