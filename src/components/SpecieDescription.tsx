import Typography from "@material-ui/core/Typography";

interface Props {
	name: string;
	type: string;
	description: string;
	photo: any;
	attribution?: JSX.Element;
}

const SpecieDescription = (props: Props): JSX.Element => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "space-between",
			marginBottom: 20,
			backgroundColor: "transparent",
			borderRadius: 10,
			width: "75%",
			alignSelf: "center",
			color: "white",
			outline: "2px solid #9c27b0"
		}}>
			<div style={{ width: "70%", padding: 20 }}>
				<Typography color="secondary" component="h3" variant="h4"><b>{props.name}</b></Typography>
				<Typography component="p" style={{ fontSize: 20 }}>Type: {props.type}</Typography>
				<Typography component="p" style={{ fontSize: 20, marginTop: 20 }}>{props.description}</Typography>

				{props.attribution === undefined ||
					<Typography component="p" style={{ paddingTop: 10 }}>{props.attribution}</Typography>
				}

			</div>

			<div style={{ width: "30%" }}>

				<img
					src={props.photo}
					alt={`${props.name}`}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						borderTopRightRadius: 10,
						borderBottomRightRadius: 10,
					}}
				/>
			</div>

		</div>
	)
};

export default SpecieDescription;