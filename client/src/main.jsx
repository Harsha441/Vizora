import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ToastContainer position="bottom-right" autoClose={3000} />
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
