import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

import { GlobalContextProvider } from "./context/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#0f172a", // slate-900
          color: "#f8fafc", // slate-50
          border: "1px solid #1e293b",
        },
        iconTheme: {
          primary: "#f075ae",
          secondary: "#020617",
        },
      }}
    />
  </>,
);
