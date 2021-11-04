import Typography from "@material-ui/core/Typography";

const CopyrightStrip = (): JSX.Element => {
	return (
		<div style={{ backgroundColor: "#bd27d3", padding:"15px", color: "white" }}>
			<Typography component="p" variant="body1">Copyright © 2021 Rights Reserved.</Typography>
		</div >
	)
}

export default CopyrightStrip;