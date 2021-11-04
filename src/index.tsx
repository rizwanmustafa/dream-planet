import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";
import CopyrightStrip from "./components/CopyrightStrip";

ReactDOM.render(
	<StrictMode>
		<Router>
			<App />
			<CopyrightStrip />
		</Router>
	</StrictMode>,
	document.querySelector("#root")
)