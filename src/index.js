import React from "react";
import { createRoot } from "react-dom";
import App from "./App";

const rootEle = document.getElementById("root");

const root = createRoot(rootEle);

root.render(<App />);
