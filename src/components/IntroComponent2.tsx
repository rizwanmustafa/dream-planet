import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import planetLogo from "../images/planet-image-new.png";

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
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "center" }}>
			<div style={parentDivStyles}>
				<div style={textDivStyles}>
					<h1 style={{ color: "#9c27b0", fontSize: "4rem", marginBottom: 10, }}>Moriz</h1>
					<p style={
						{
							lineHeight: "35px",
							fontSize: "20px",
							paddingRight: "100px",
							textAlign: "justify",
						}
					}>
						Moriz was actually part of a galaxy N-12794 but was sent propelling into our Milkyway by a great explosion caused by a supernova millions of miles away from Moriz.
						Luckily, Moriz was able to withstand the explosion and is now orbiting Sun and is located between Mars' and Earth's orbit.
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
					onClick={() => history.push("/species")}
				>
					Read about Species
				</Button>

				<Button
					color="secondary"
					variant="contained"
					style={{ padding: "10px 20px", margin: "40px 10px", }}
					onClick={() => history.push("/discovery_and_features")}
				>Read about Discoveries and Features</Button>
			</div>
		</div>
	)

}

export default IntroComponent2;