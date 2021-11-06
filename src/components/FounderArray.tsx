import Typography from "@material-ui/core/Typography";

interface Props {
	founders: Founder[];
}

interface Founder {
	founderImage: any;
	founderName: string;
}

const FounderArray = (props: Props): JSX.Element => {
	const founderElements = props.founders.map((founder, index) => {
		return (
			<div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 30, backgroundColor: "white", padding: 20, width: 250, borderRadius: 10 }}>
				<img
					src={founder.founderImage}
					alt={`${founder.founderName}`}
					style={{ width: 150, height: 150, objectFit: "cover", borderRadius: "100%", marginBottom: 30 }}
				/>
				<Typography component="h3" variant="h4" style={{ marginBottom: 15, textAlign: "center", }}>{founder.founderName}</Typography>
			</div>
		)
	})

	return (
		<div>
			<Typography
				component="h1"
				variant="h2"
				style={{ textAlign: "center", marginBottom: 30, marginTop: 50 }}
			>
				<b>Founders</b>
			</Typography>
			<div style={{ display: "flex", justifyContent: "center" }}>
				{founderElements}
			</div >

		</div>
	)

}

export default FounderArray;