"use client";

import ActionDialog, {
  ActionDialogProps,
  DialogButtonProps,
} from "./ActionDialog";

interface YesNoDialogProps
  extends Omit<
    ActionDialogProps,
    "cancelButton" | "okButton" | "onCancel" | "onOk"
  > {
  noButton?: DialogButtonProps;
  onNo: () => void;
  yesButton?: DialogButtonProps;
  onYes: () => void;
}

export default function YesNoDialog({
  titleText,
  contentText,
  noButton = { label: "No", color: "error" },
  onNo,
  yesButton = { label: "Yes", color: "primary" },
  onYes,
  open,
}: YesNoDialogProps) {
  const onCancel = () => onNo();
  const onOk = () => onYes();

  return (
    <ActionDialog
      titleText={titleText}
      contentText={contentText}
      cancelButton={noButton}
      okButton={yesButton}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
    />
  );
}
