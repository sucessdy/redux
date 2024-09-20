import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./store/Store.jsx";
import { Provider } from "react-redux";

Store.subscribe(() => console.log(Store.getState()));
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
