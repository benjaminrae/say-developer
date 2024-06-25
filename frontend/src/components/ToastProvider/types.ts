export type ToastOptions = {
  autoRemoveDelayInMs?: number;
  willAutoRemove?: boolean;
}

export type ToastContextValue = {
  successToast: (message: string, options: ToastOptions) => void;
  dismissToast: (id: string) => void;
  failureToast: (message: string, options: ToastOptions) => void;
}

export type ToastType = "success" | "failure";
