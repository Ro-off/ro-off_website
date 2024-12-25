import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

const BASE_URL = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_URL}>
      <Provider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
