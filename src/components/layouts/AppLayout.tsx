import React from "react";
import Navbar from "../hoc/Navbar";

const AppLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default AppLayout;
