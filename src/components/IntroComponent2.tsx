import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import planetLogo from "../images/planet-image-new.png";
import solarSystem from "../images/solar-system.png";


const IntroComponent2 = () => {
	const history = useHistory();

	const parentDivStyles = {
		display: "flex",
		alignSelf: "center"
	}

	const textDivStyles = {
		alignSelf: "center",
		maxWidth: "700px",
		paddingLeft: "20px",
	}

	const imageStyles = {
		width: "50vw",
		maxWidth: "500px",
	}

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			alignSelf: "center",
			margin: "50px 10px",
			color: "white",
		}}>
			<div style={parentDivStyles}>
				<div style={textDivStyles}>
					<Typography variant="h2" component="h2" color="secondary" style={{ fontWeight: "bold" }}>Moriz</Typography>
					<p style={
						{
							lineHeight: "35px",
							fontSize: "20px",
							paddingRight: "100px",
							textAlign: "justify",
						}
					}>
						Moriz was actually part of a galaxy N-12794 but was sent propelling into our Milkyway by a great explosion caused by a supernova millions of miles away from Moriz.
						Luckily, Moriz was able to withstand the explosion and is now orbiting Sun and is located between Venus' and Earth's orbit.
						The best part about all of this is the fact that this magical planet can sustain life and it is even better at it than Earth.
					</p>
				</div>

				<div>
					<img src={planetLogo} style={imageStyles} alt="Planet Moriz" />
				</div>
			</div>

			<div>
				<Button
					color="secondary"
					variant="contained"
					style={{ padding: "10px 20px", margin: "40px 10px", }}
					onClick={() => { window.scroll(0, 0); history.push("/discovery_and_features"); }}
				>Read about its Discovery and Features</Button>

				<Button
					color="secondary"
					variant="contained"
					style={{ padding: "10px 20px", margin: "40px 10px", }}
					onClick={() => { window.scroll(0, 0); history.push("/species"); }}
				>
					Read about Native Species
				</Button>

			</div>

			<div style={{ display: "flex", alignItems: "center", flexDirection: "column", maxWidth: 1220 }}>
				<Typography
					color="secondary"
					component="h2"
					variant="h2"
					style={{ fontWeight: "bold", margin: "50px 10px" }}
				>
					Moriz's Position in the Solar System
				</Typography>

				<img src={solarSystem} alt="Solar System" style={{ width: "100%", borderRadius: 10 }} />
			</div>
		</div>
	)

}

export default IntroComponent2;