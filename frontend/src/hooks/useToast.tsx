import {useContext} from "react";
import {ToastContext} from "../components/ToastProvider/ToastContext.ts";

export const useToast = () => useContext(ToastContext);
