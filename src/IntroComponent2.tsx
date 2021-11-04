import planetLogo from "./images/planet_idea_cropped.png";
const IntroComponent2 = () => {

	const parentDivStyles = {
		display: "flex",
		width: "100vw",
	}

	const textDivStyles = {
		alignSelf: "center",
		maxWidth:"750px",
		paddingLeft: "20px",
	}

	const imageStyles = {
		width: "50vw",
		maxWidth: "500px",
	}

	return (
		<div style={parentDivStyles}>
			<div style={textDivStyles}>
				<h1 style={{color: "#bd27d3", fontSize:"4rem"}}>Moriz</h1>
				<p style={
					{
						lineHeight: "1.75rem",
						fontSize:"18px",
						paddingRight: "100px",
					}
				}>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</p>
			</div>

			<div>
				<img src={planetLogo} style={imageStyles}/>
			</div>
		</div>
	)

}

export default IntroComponent2;