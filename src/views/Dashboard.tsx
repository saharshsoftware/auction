import React from "react";
import { useGlobalStore } from "../zustandStore/store";

const Dashboard: React.FC = () => {
  const { setToken, token, userData } = useGlobalStore();
  const data = {
    token: "123",
    userData: {
      name: "test",
    },
  };
  const toggle = () => {
    console.log(token, userData);
    if (token) {
      setToken("");
      return;
    }
    setToken(data?.token);
  };
  return (
    <>
      <button className="btn" onClick={toggle}>
        Click Me!
      </button>
      Dashboard
    </>
  );
};

export default Dashboard;
