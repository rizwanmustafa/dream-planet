import ClassicHeading from "./ClassicHeading";
import Typography from "@material-ui/core/Typography";

interface Props {
	heading: string;
	body: string;
	picture: any;
	tabletMode: boolean;
}

const HeadingParagraphWithPicture = (props: Props): JSX.Element => {
	return (
		<div style={{
			display: "flex",
			flexDirection: props.tabletMode ? "column" : "row",
			backgroundColor: "transparent",
			color: "white",
			margin: 20,
			borderRadius: 10,
			width: props.tabletMode ? "unset" : "75%",
			alignSelf: "center",
			outline: "2px solid #9c27b0",
		}}>
			<div style={{ width: props.tabletMode ? "unset" : "60%", padding: 20 }}>
				<ClassicHeading tabletMode={props.tabletMode}>{props.heading}</ClassicHeading>
				<Typography style={{ fontSize: 18, lineHeight: "33px", textAlign: props.tabletMode ? "justify" : "left" }}>{props.body}</Typography>
			</div>

			<div style={{ width: props.tabletMode ? "unset" : "40%", padding: props.tabletMode ? 20 : 0, }}>
				<img src={props.picture} alt={props.heading} style={{
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderRadius: props.tabletMode ? 10 : 0,
					borderTopRightRadius: 10,
					borderBottomRightRadius: 10,
				}} />
			</div>

		</div>
	);
}

export default HeadingParagraphWithPicture;