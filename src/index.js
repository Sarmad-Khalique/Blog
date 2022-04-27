import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PostProvider from "./context/provider/posts/posts.provider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <PostProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostProvider>
);
