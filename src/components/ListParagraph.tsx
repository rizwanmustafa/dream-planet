import Typography from "@material-ui/core/Typography";
interface Props {
	heading: string;
	listItems: string[];
}
const ListParagraph = (props: Props): JSX.Element => {
	return (
		<>
			<div style={{
				alignSelf: "center",
				margin: 20,
				padding: 20,
				width: "90%",
			}}>
				<Typography color="secondary" component="h3" variant="h4" >{props.heading}</Typography>

				<ul>
					{
						props.listItems.map((listItem: string, index: number) => {
							return (
								<li key={index}>
									<Typography component="p" style={{ paddingTop: 10, fontSize: 18, lineHeight: "30px" }}>
										{listItem}
									</Typography>
								</li>
							);
						})
					}
				</ul>
			</div>
		</>
	);
}

export default ListParagraph;