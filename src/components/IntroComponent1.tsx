import planetImage from "../images/planet-image-new.png";
const IntroComponent1 = (): JSX.Element => {

	return (
		<div style={{ position: "relative", width: "100%", height: "500px" }}>
			<img src={planetImage} style={{ width: "100%", height: "100%", objectFit: 'cover' }} />

			<div style={{ position: "absolute", left: 0, top: 0, textTransform: "uppercase", }}>
				<h1>Head out on your next planet</h1>
				<button>Book a ticket</button>
			</div>

		</div>
	)
}

export default IntroComponent1