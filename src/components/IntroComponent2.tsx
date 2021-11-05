import planetLogo from "../images/planet-image-new.png";
const IntroComponent2 = () => {

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
		<div style={parentDivStyles}>
			<div style={textDivStyles}>
				<h1 style={{ color: "#bd27d3", fontSize: "4rem", marginBottom: 10, }}>Moriz</h1>
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
	)

}

export default IntroComponent2;