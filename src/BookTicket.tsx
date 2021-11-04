import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const BookTicket = (): JSX.Element => {
	const [message, setMessage] = useState<string>("");

	return (
		<form
			style={{
				margin: 20,
				padding: 30,
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				width: "425px",
				backgroundColor: "white",
				borderRadius: 5,
			}}
		>
			<Typography
				component="h1"
				variant="h4"
				style={{ color: "#bd27d3", paddingBottom: 10 }}
			>
				<b>Book a ticket to Moriz now!</b>
			</Typography>

			<Typography color="secondary" style={{ paddingBottom: 50 }}>Price: 1 Million Rupees</Typography>

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


		</form >
	)

}

export default BookTicket;