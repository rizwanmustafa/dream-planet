import Typography from "@material-ui/core/Typography";
interface Props {
	heading: string;
	listItems: string[];
	tabletMode: boolean;
}
const ListParagraph = (props: Props): JSX.Element => {
	return (
			<div style={{
				alignSelf: "center",
				margin: 20,
				padding: 20,
				width: "90%",
				outline: "2px solid #9c27b0",
				borderRadius: 10,
			}} {...{"data-aos-once": "true", "data-aos": "zoom-in"}}>
				<Typography color="secondary" component="h3" variant="h4" style={{ textAlign: props.tabletMode ? "center" : "left" }}>{props.heading}</Typography>

				<ul>
					{
						props.listItems.map((listItem: string, index: number) => {
							return (
								<li key={index}>
									<Typography component="p" style={{
										paddingTop: 10,
										fontSize: 18,
										lineHeight: "30px",
										textAlign: props.tabletMode ? "justify" : "left",
									}}>
										{listItem}
									</Typography>
								</li>
							);
						})
					}
				</ul>
			</div>
	);
}

export default ListParagraph;