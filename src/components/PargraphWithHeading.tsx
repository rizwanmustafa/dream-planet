import Typography from "@material-ui/core/Typography";

interface Props {
	heading: string;
	body: string;
}

const ParagraphWithHeading = (props: Props): JSX.Element => {
	return (
		<div style={{
			alignSelf: "center",
			margin: 20,
			padding: 20,
			width: "90%",
		}}>
			<Typography color="secondary" component="h3" variant="h4" >{props.heading}</Typography>
			<Typography component="p" style={{ paddingTop: 10, fontSize: 18, lineHeight: "30px" }}>{props.body}</Typography>
		</div>
	);
};

export default ParagraphWithHeading;