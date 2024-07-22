import {ToastContext} from "./ToastContext.ts";
import React, {PropsWithChildren, useCallback, useState} from "react";
import {ToastContainer} from "./ToastContainer.tsx";
import {Toast} from "../Toast/Toast.tsx";
import {ToastType} from "./types.tsx";
import {nanoid} from "nanoid";
import {MainContainer} from "../MainContainer/MainContainer.tsx";
import {ToastOptions} from "./types.ts";

export type ToastNotification = {
  autoRemoveDelayInMs: number;
  willAutoRemove: boolean;
  id: string;
  variant: ToastType;
  text: string;
}

const defaultAutoRemoveDelayInMs = 5000;

export const ToastProvider = ({children}: PropsWithChildren): React.ReactElement => {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id))
  }, [toasts])

  const addToast = useCallback((toast: ToastNotification) => {
    setToasts(oldToasts => [...oldToasts, toast])
  }, [])

  const createToastId = () => nanoid();

  const successToast = useCallback((text: string, options?: ToastOptions) => {
    addToast({
      id: createToastId(),
      variant: "success",
      text: text,
      autoRemoveDelayInMs: options?.autoRemoveDelayInMs ?? defaultAutoRemoveDelayInMs,
      willAutoRemove: options?.willAutoRemove ?? true,
    });
  }, [addToast])
  const failureToast = useCallback((text: string, options?: ToastOptions) => {
    addToast({
      id: createToastId(),
      variant: "failure",
      text: text,
      autoRemoveDelayInMs: options?.autoRemoveDelayInMs ?? defaultAutoRemoveDelayInMs,
      willAutoRemove: options?.willAutoRemove ?? true
    })
  }, [addToast])

  return (
    <ToastContext.Provider value={{successToast, failureToast, dismissToast}}>
      <MainContainer>
        <ToastContainer>
          {toasts.map(toast => (
            <Toast key={toast.id} toast={toast} onClick={() => dismissToast(toast.id)}/>
          ))}
          {children}
        </ToastContainer>
      </MainContainer>
    </ToastContext.Provider>
  )
}
