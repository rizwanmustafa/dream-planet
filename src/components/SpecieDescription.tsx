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
			backgroundColor: "white",
			borderRadius: 10,
			width: "60%",
			alignSelf: "center",
		}}>
			<div style={{ width: "70%", padding: 20 }}>
				<Typography color="secondary" component="h3" variant="h4"><b>{props.name}</b></Typography>
				<Typography component="p">Type: {props.type}</Typography>
				<Typography component="p" style={{ paddingTop: 10 }}>{props.description}</Typography>

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