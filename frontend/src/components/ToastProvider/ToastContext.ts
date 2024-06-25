import {createContext} from "react";
import {ToastContextValue} from "./types.ts";

export const ToastContext = createContext<ToastContextValue>({} as ToastContextValue)
