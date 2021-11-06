import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import planetHorizon from "../images/planet-horizon.png";

const IntroComponent1 = (): JSX.Element => {
	const history = useHistory();

	return (
		<div style={{ position: "relative", width: "100%", height: "500px", color: "white" }}>
			<img src={planetHorizon} alt=""style={{ width: "100%", height: "100%", objectFit: 'cover' }} />

			<div style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				textAlign: "center",
				transform: "translate(-50%, -50%)"
			}}>

				<Typography component="h1" variant="h2" style={{ maxWidth: 750, fontWeight: "bold" }}>
					Head out to <span style={{ color: "#9c27b0" }}>Moriz</span> now!
				</Typography>
				<Button
					color="secondary"
					variant="contained"
					style={{ padding: "10px 50px", marginTop: "40px", }}
					onClick={() => history.push("/order")}
				>
					Book a ticket!
				</Button>

			</div>

		</div>
	)
}

export default IntroComponent1