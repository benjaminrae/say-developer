import styled, {css} from "styled-components";
import {ToastNotification} from "../ToastProvider/ToastProvider.tsx";

export type ToastWrapperProps = {
  toast: ToastNotification;
}

const toastColors = css<ToastWrapperProps>`
  border: 1px solid;

  ${(props) => {
    switch (props.toast.variant) {
      case "success":
        return `
          background-color: ${props.theme.colors.support.green.weak};
          border-color: ${props.theme.colors.support.green.mid};
          color: ${props.theme.colors.support.green.strong};
        `;
      case "failure":
        return `
          background-color: ${props.theme.colors.support.red.weak}
          border-color: ${props.theme.colors.support.red.mid};
          color: ${props.theme.colors.support.red.strong}
        `;
      default:
        return `
          background-color: ${props.theme.colors.support.cyan.weak}
          border-color: ${props.theme.colors.support.cyan.mid};
          color: ${props.theme.colors.support.cyan.strong}
        `;

    }
}}
`

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: absolute;
  transition: transform 0.3s ease-in;
  animation: slide-in 0.5s;
  bottom: 10vh;
  right: 0;
  z-index: 100;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;

  @keyframes slide-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 100%;
    }
  }

  ${toastColors}
`


export const ToastText = styled.span({
  fontWeight: "bold",
  flex: 1,
})

export const ToastDismiss = styled.button({})
