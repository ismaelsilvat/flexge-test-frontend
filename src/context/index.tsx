import React, { PropsWithChildren } from "react";

import { UserProvider } from "./User";

interface Props {
  children?: React.ReactNode;
}

const GlobalContext: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default GlobalContext;
