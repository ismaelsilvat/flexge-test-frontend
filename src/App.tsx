import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import { TitleComponent } from "./Test";

const { useToken } = theme;

export const App = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "pink",
          },
        }}
      >
        <TitleComponent />
        <Router></Router>
      </ConfigProvider>
    </>
  );
};
