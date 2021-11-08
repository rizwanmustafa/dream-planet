import Typography from "@material-ui/core/Typography";

interface Props {
	name: string;
	type: string;
	description: string;
	photo: any;
	attribution?: JSX.Element;
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
			color: "white",
			outline: "2px solid #9c27b0"
		}}>
			<div style={{ width: props.tabletMode ? "unset" : "70%", padding: 20 }}>
				<Typography color="secondary" component="h3" variant="h4" style={{ textAlign: props.tabletMode ? "center" : "left", }}><b>{props.name}</b></Typography>
				<Typography component="p" style={{ fontSize: 20, textAlign: props.tabletMode ? "center" : "left", }}>Type: {props.type}</Typography>
				<Typography component="p" style={{ fontSize: 20, marginTop: 20, textAlign: props.tabletMode ? "justify" : "left", }}>{props.description}</Typography>

				{props.attribution === undefined ||
					<Typography component="p" style={{ paddingTop: 10, textAlign: props.tabletMode ? "center" : "left" }}>{props.attribution}</Typography>
				}

			</div>

			<div style={{ width: props.tabletMode ? "unset" : "30%", padding: props.tabletMode ? 20 : 0, }}>

				<img
					src={props.photo}
					alt={`${props.name}`}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderRadius: props.tabletMode ? 10 : "0",
						borderTopRightRadius: 10,
						borderBottomRightRadius: 10,
					}}
				/>
			</div>

		</div>
	)
};

export default SpecieDescription;