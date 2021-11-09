import { StrictMode } from "react";
import { HashRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
	document.querySelector("#root")
)