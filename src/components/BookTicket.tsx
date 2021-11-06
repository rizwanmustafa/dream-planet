import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import planetImage from "../images/for-ticket-page.png";


const BookTicket = (): JSX.Element => {
	const [message, setMessage] = useState<string>("");

	return (
		<form
			style={{
				display: "flex",
				alignSelf: "center",
				margin: "20px",
				textAlign: "center",
				backgroundColor: "white",
				borderRadius: "5px",
			}}
		>

			<div
				style={{
					background: "black",
					padding: "20px",
					width: "400px",
					display: "flex",
					alignItems: "center",
					borderTopLeftRadius: "5px",
					borderBottomLeftRadius: "5px",
				}}

			>
				<img
					src={planetImage}
					alt="Planet Moriz"
					style={{ width: "100%" }}
				/>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "30px",
				}}
			>

				<Typography
					component="h1"
					variant="h4"
					style={{ color: "#bd27d3", paddingBottom: 10 }}
				>
					<b>Book a ticket to Moriz now!</b>
				</Typography>

				<Typography color="secondary" style={{ paddingBottom: 50 }}>1 Ticket Price is  $1,250,000</Typography>

				<TextField
					label="Full Name"
					variant="filled"
					color="secondary"
					style={{ marginBottom: 20 }}
					required
					id="fullNameInput"
				/>

				<TextField
					label="Email Address"
					variant="filled"
					color="secondary"
					style={{ marginBottom: 20 }}
					required
					id="emailAddressInput"
				/>

				<TextField
					label="No of tickets"
					variant="filled"
					color="secondary"
					type="number"
					style={{ marginBottom: 20 }}
					placeholder="1"
					required
					id="noOfTicketsInput"
				/>

				<Button
					variant="contained"
					color="secondary"
					style={{ padding: 8 }}
					onClick={() => {
						if ((document.querySelector("#fullNameInput") as HTMLInputElement)?.value.trim() === "")
							setMessage("Please enter a valid fullname!")
						else if ((document.querySelector("#emailAddressInput") as HTMLInputElement)?.value.trim() === "")
							setMessage("Please enter a valid email address!")
						else if ((document.querySelector("#noOfTicketsInput") as HTMLInputElement)?.value.trim() === ""
							|| Number((document.querySelector("#noOfTicketsInput") as HTMLInputElement)?.value) <= 0)
							setMessage("Please enter a valid number of tickets!")
						else
							setMessage("An invoice has been mailed to you! Thanks for your order!")

					}}
				>
					Book a ticket!
				</Button>

				{
					message === "" ||
					<Typography
						color="secondary"
						style={{ marginTop: 15, marginBottom: 5 }}
					>
						{message}
					</Typography>

				}

			</div>

		</form >
	)

}

export default BookTicket;