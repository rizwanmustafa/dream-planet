import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import checkBG from "../images/about-us-bg.jpeg";


const AboutUs = (): JSX.Element => {
	const history = useHistory();

	return (
		<div style={{
			backgroundColor: "black",
			color: "white",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			backgroundImage: `url(${checkBG})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			borderBottom: "2px solid #9c27b0",
			padding: 20,
		}}>

			<Typography
				component="h1"
				variant="h2"
				style={{ textAlign: "center", marginBottom: 30, marginTop: 50 }}
			>
				<b>About Us</b>
			</Typography>

			<div style={{ textAlign: "justify", maxWidth: 750, marginBottom: 50, display: "flex", flexDirection: "column", }}>
				<Typography
					component="p"
					variant="h5"
					style={{ lineHeight: "35px" }}
				>
					<span style={{ color: "#bd27d3", fontWeight: "bold" }}>Aurora Cosmics</span> is an aerospace travel compnay that is working hard towards providing everyone with quality tourism that is affordable.
					We operate not just on Earth but on several other planets including Moriz, Jupiter and Venus.
					We are the best cross-planet tourism company in the universe and have been trusted by over 250 million customers.
				</Typography>

				<br />

				<Typography
					component="p"
					variant="h5"
					style={{ lineHeight: "35px" }}
				>
					Embark on a great journey with us.
					A journey that will shock you.
					A journey that will inspire you.
					A journey that will change you!
				</Typography>

				<Button
					variant="contained"
					color="secondary"
					style={{ padding: "10px 50px", marginTop: "40px", alignSelf: "center" }}
					onClick={() => {   history.push("/order") }}
				>
					Book a ticket!
				</Button>
			</div>
		</div>
	)

}

export default AboutUs;