import ClassicHeading from "./ClassicHeading";
import Typography from "@material-ui/core/Typography";

interface Props {
	heading: string;
	body: string;
	picture: any;
}

const HeadingParagraphWithPicture = (props: Props): JSX.Element => {
	return (
		<div style={{
			backgroundColor: "transparent",
			color: "white",
			margin: 20,
			borderRadius: 10,
			display: "flex",
			width: "75%",
			alignSelf: "center",
			outline: "2px solid #9c27b0",
		}}>
			<div style={{ width: "60%", padding: 30, }}>
				<ClassicHeading>{props.heading}</ClassicHeading>
				<Typography style={{ fontSize: 18, lineHeight: "33px" }}>{props.body}</Typography>
			</div>

			<div style={{ width: "40%" }}>
				<img src={props.picture} alt={props.heading} style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderTopRightRadius: 10,
					borderBottomRightRadius: 10,
				}} />
			</div>

		</div>
	);
}

export default HeadingParagraphWithPicture;