import Typography from "@material-ui/core/Typography";

interface Props {
	heading: string;
	description: string;
	photo: any;
	tabletMode: boolean;
}

const FeatureWithPhoto = (props: Props): JSX.Element => {
	return (
		<div style={{
			display: "flex",
			flexDirection: props.tabletMode ? "column" : "row",
			justifyContent: "space-between",
			margin: 20,
			padding: 20,
			backgroundColor: "transparent",
			borderRadius: 10,
			width: "90%",
			alignSelf: "center",
			alignItems: "center",
			
			outline: "2px solid #9c27b0"
		}} {...{ "data-aos-once": "true", "data-aos": "zoom-in" }}>
			<div style={{ width: props.tabletMode ? "unset" : "70%" }}>
				<Typography color="secondary" component="h3" variant="h4" style={{ textAlign: props.tabletMode ? "center" : "left" }}>{props.heading}</Typography>
				<Typography component="p" style={{ fontSize: 20, marginTop: 20, textAlign: props.tabletMode ? "justify" : "left", }}>{props.description}</Typography>

			</div>

			<div style={{ width: props.tabletMode ? "unset" : "30%", padding: props.tabletMode ? 20 : 0, }}>

				<img
					src={props.photo}
					alt={`${props.heading}`}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: 10,
					}}
				/>
			</div>

		</div>
	)
};

export default FeatureWithPhoto;