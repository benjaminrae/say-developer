import React, {useEffect} from "react";
import {ToastNotification} from "../ToastProvider/ToastProvider.tsx";
import {XMark} from "../../shared/Icons/XMark.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ToastText, ToastWrapper} from "./Toast.styled.tsx";

export type ToastProps = {
  toast: ToastNotification;
  onClick: () => void
}

export const Toast = ({toast, onClick}: ToastProps): React.ReactElement => {

  useEffect(() => {
    if (toast.willAutoRemove) {

      const timeout = setTimeout(() => {
        onClick();
      }, toast.autoRemoveDelayInMs)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, []);

  return (
    <ToastWrapper toast={toast}>
      <ToastText>
        {toast.text}
      </ToastText>
      <Button onClick={onClick} aria-label="Dismiss" variant="ghost">
        <XMark color="#000" size="xl"/>
      </Button>
    </ToastWrapper>
  )
}
