import React from "react";

const AppLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return <>{children}</>;
};

export default AppLayout;
