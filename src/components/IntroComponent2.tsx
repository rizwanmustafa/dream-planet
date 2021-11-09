import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import planetLogo from "../images/planet-image-new.png";
import solarSystem from "../images/solar-system.png";
import { CSSProperties } from "react";

interface Props {
	mobileMode: boolean;
	tabletMode: boolean;
}

const IntroComponent2 = (props: Props) => {
	const history = useHistory();

	const parentDivStyles = {
		display: "flex",
		alignSelf: "center",
		flexDirection: props.tabletMode ? "column-reverse" : "row",
		alignItems: props.tabletMode ? "center" : "unset",
	}

	const textDivStyles = {
		alignSelf: "center",
		maxWidth: !props.tabletMode ? "700px" : "100%",
		paddingLeft: !props.tabletMode ? "20px" : 0,
		margin: props.tabletMode ? 20 : 0,
		textAlign: props.tabletMode ? "center" : "unset",
	}

	const imageStyles = {
		width: "50vw",
		maxWidth: "500px",
	}

	const buttonStyles: CSSProperties = {
		padding: "10px 20px",
		margin: props.tabletMode ? 10 : "40px 10px",
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
			<div style={parentDivStyles as CSSProperties} {...{ "data-aos": "zoom-in" }}>
				<div style={textDivStyles as React.CSSProperties}>
					<Typography variant="h2" component="h2" color="secondary" style={{ fontWeight: "bold" }}>Moriz</Typography>
					<p style={
						{
							lineHeight: "35px",
							fontSize: "20px",
							paddingRight: !props.tabletMode ? "100px" : 0,
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

			<div style={{
				display: "flex",
				flexDirection: props.tabletMode ? "column" : "row"
			}} {...{"data-aos":"zoom-in"}}>
				<Button
					color="secondary"
					variant="contained"
					style={buttonStyles}
					onClick={() => { history.push("/discovery"); }}
				>Read about its Discovery</Button>

				<Button
					color="secondary"
					variant="contained"
					style={buttonStyles}
					onClick={() => { history.push("/features"); }}
				>Read about its Features</Button>


				<Button
					color="secondary"
					variant="contained"
					style={buttonStyles}
					onClick={() => { history.push("/species"); }}
				>
					Read about Native Species
				</Button>

			</div>

			<div style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				maxWidth: 1220
			}} {...{"data-aos":"zoom-in"}}>
				<Typography
					color="secondary"
					component="h2"
					variant="h2"
					style={{ fontWeight: "bold", margin: "50px 10px", textAlign: "center" }}
				>
					Our Solar System
				</Typography>

				<img src={solarSystem} alt="Solar System" style={{ width: "100%", borderRadius: 10 }} />
			</div>
		</div>
	)

}

export default IntroComponent2;