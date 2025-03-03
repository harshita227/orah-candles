import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import MyStore from "./Components/Redux/MyStore.jsx";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={MyStore}>
    <App />
  </Provider>
);
