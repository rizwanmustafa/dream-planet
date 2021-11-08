import Typography from "@material-ui/core/Typography";

interface Props {
	tabletMode: boolean
}

const CopyrightStrip = (props: Props): JSX.Element => {
	return (
		<div id="copyrightStrip" style={{
			backgroundColor: "black",
			padding: "15px",
			color: "white",
			textAlign: props.tabletMode ? "center" : "unset"
		}}>
			<Typography component="p" variant="body1">Copyright © 2021 Rights Reserved.</Typography>
		</div >
	)
}

export default CopyrightStrip;