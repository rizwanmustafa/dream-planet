import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import App from "./App";
import CopyrightStrip from "./components/CopyrightStrip";

ReactDOM.render(
	<StrictMode>
		<Router>
			<MenuBar />
			<div style={{paddingTop: 65, backgroundColor: "#9c27b0"}}></div>
			<App />
			<CopyrightStrip />
		</Router>
	</StrictMode>,
	document.querySelector("#root")
)