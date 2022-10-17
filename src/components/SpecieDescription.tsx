import Typography from "@material-ui/core/Typography";

interface Props {
	name: string;
	type: string;
	description: string;
	photo: any;
	tabletMode: boolean;
}

const SpecieDescription = (props: Props): JSX.Element => {
	return (
		<div style={{
			display: "flex",
			flexDirection: props.tabletMode ? "column" : "row",
			justifyContent: "space-between",
			margin: props.tabletMode ? 20 : "0 0 20px 0",
			backgroundColor: "transparent",
			borderRadius: 10,
			width: props.tabletMode ? "unset" : "75%",
			alignSelf: "center",
			alignItems: "center",
			
			outline: "2px solid #9c27b0"
		}} {...{ "data-aos-once": "true", "data-aos": "zoom-in" }}>
			<div style={{ width: props.tabletMode ? "unset" : "70%", padding: 20 }}>
				<Typography color="secondary" component="h3" variant="h4" style={{ textAlign: props.tabletMode ? "center" : "left", }}><b>{props.name}</b></Typography>
				<Typography component="p" style={{ fontSize: 20, textAlign: props.tabletMode ? "center" : "left", }}>Type: {props.type}</Typography>
				<Typography component="p" style={{ fontSize: 20, marginTop: 20, textAlign: props.tabletMode ? "justify" : "left", }}>{props.description}</Typography>

			</div>

			<div style={{ width: props.tabletMode ? "unset" : "30%", padding: props.tabletMode ? 20 : 0, }}>

				<img
					src={props.photo}
					alt={`${props.name}`}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderTopRightRadius: 10,
						borderTopLeftRadius: props.tabletMode ? 10 : 0,
						borderBottomLeftRadius: props.tabletMode ? 10 : 0,
						borderBottomRightRadius: 10,
					}}
				/>
			</div>

		</div>
	)
};

export default SpecieDescription;