import { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import planetImage from "../images/for-ticket-page.png";

interface Props {
	tabletMode: boolean;
}


const BookTicket = (props: Props): JSX.Element => {
	const [message, setMessage] = useState<string>("");
	const [confirmOrder, setConfirmOrder] = useState<boolean>(false);

	useEffect(() => {
		const popup = document.querySelector("#popup") as HTMLElement
		if (confirmOrder) {
			popup.style.visibility = "visible";
			popup.style.opacity = "1";
		}
		else {
			popup.style.opacity = "0";
			setTimeout(() => popup.style.visibility = "hidden", 500);
		}
	}, [confirmOrder])

	const orderConfirmedPopUp: JSX.Element = (
		<div id="popup" style={{
			position: "absolute",
			top: "50%", left: "50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "black",
			padding: 20,
			borderRadius: 10,
			zIndex: 2,
			outline: "2px solid #9c27b0",
			opacity: 0,
			transition: "opacity 0.5s ease-in-out"
		}}>
			<Typography
				component="h1"
				variant="h4"
				style={{ color: "#bd27d3", paddingBottom: 10, fontWeight: "bold", }}
			>
				Order Confirmed!
			</Typography>

			<Typography
				style={{ "color": "white", marginBottom: 10 }}
			>
				Thanks for ordering!
				Your order has been placed and an invoice has been mailed to you.
				We hope you have a safe journey!
			</Typography>

			<Button variant="contained" color="secondary" onClick={() => setConfirmOrder(false)}>OK</Button>
		</div>
	);

	return (
		<form
			style={{
				position: "relative",
				display: "flex",
				flexDirection: props.tabletMode ? "column" : "row",
				alignSelf: "center",
				margin: "20px",
				textAlign: "center",
				backgroundColor: "transparent",
				color: "white",
				borderRadius: "5px",
				outline: "2px solid #9c27b0",
			}}
		>
			{orderConfirmedPopUp}

			<div
				style={{
					background: "black",
					padding: "20px",
					width: props.tabletMode ? "unset" : "400px",
					height: props.tabletMode ? "30vh" : "unset",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderTopLeftRadius: "5px",
					borderBottomLeftRadius: "5px",
				}}

			>
				<img
					src={planetImage}
					alt="Planet Moriz"
					style={{ width: props.tabletMode ? "unset" : "100%", height: props.tabletMode ? "100%" : "unset", borderRadius: 10 }}
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
					style={{ color: "#bd27d3", paddingBottom: 10, fontWeight: "bold", }}
				>
					Book a ticket to Moriz now!
				</Typography>

				<Typography color="secondary" style={{ paddingBottom: 50 }}>1 Ticket Price is  $1,250,000</Typography>

				<TextField
					label="Full Name"
					variant="filled"
					color="secondary"
					style={{ marginBottom: 20 }}
					required
					id="fullNameInput"
					sx={{ "*": { color: "black !important" }, "input": { backgroundColor: "white" } }}
				/>

				<TextField
					label="Email Address"
					variant="filled"
					color="secondary"
					style={{ marginBottom: 20 }}
					required
					id="emailAddressInput"
					type="email"
					sx={{ "*": { color: "black !important" }, "input": { backgroundColor: "white" } }}
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
					sx={{ "*": { color: "black !important" }, "input": { backgroundColor: "white" } }}
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
						else {
							setMessage("");
							setConfirmOrder(true);
						}

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