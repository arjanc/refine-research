import React from "react";
import { createRoot } from "react-dom/client";
import { Space, Spin } from 'antd';

import App from "./App";
import "./i18n";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}><Space align="center"><Spin size="large"/></Space></div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);

