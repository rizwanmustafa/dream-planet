import Typography from "@material-ui/core/Typography";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	tabletMode: boolean;
}
const ClassicHeading = (props: Props): JSX.Element => {
	return (
		<Typography variant="h3" component="h2" color="secondary" style={{ fontWeight: "bold", marginBottom: 20, textAlign: props.tabletMode ? "center" : "left", }}>
			{props.children}
		</Typography>
	);
}

export default ClassicHeading;