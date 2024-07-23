import {PropsWithChildren} from "react";

export const MainContainer = ({children}: PropsWithChildren) => <div
  className="min-h-screen px-6 max-w-7xl my-0 mx-auto relative flex flex-col">{children}</div>
