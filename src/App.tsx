import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import ApplicationRoutes from "./routes/Routes";
import GlobalContext from "./context";

export const App = () => {
  return (
    <>
      <GlobalContext>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "pink",
            },
          }}
        >
          <Router>
            <ApplicationRoutes />
          </Router>
        </ConfigProvider>
      </GlobalContext>
    </>
  );
};
