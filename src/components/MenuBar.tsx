import { useState, useEffect, CSSProperties } from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const MenuBar = (): JSX.Element => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const menuStyles: CSSProperties = {
		position: "absolute",
		top: 100,
		right: 20,

		display: "flex",
		flexDirection: "column",


		backgroundColor: "white",
		borderRadius: 10,

		// For menu opening animation
		maxHeight: 0,
		overflow: "hidden",
		transition: "max-height 0.5s ease-in-out",

	}

	const menuChildrenStyles: CSSProperties = {
		padding: "15px 20px",
		textDecoration: "none",
		color: "#9c27b0",
		fontWeight: "bold",
	}

	const hideMenuIfClickedOutside = (e: MouseEvent) => {
		// Hide the menu if the menu icon was clicked
		// This also hides the menu if a link inside the menu was clicked
		if ((e.target as HTMLElement).closest("#menuIcon") === null)
			setShowMenu(false)
	}

	// Add event listener for hiding menu if clicked outside
	useEffect(() => {
		document.addEventListener("click", hideMenuIfClickedOutside)

		return () => document.removeEventListener("click", hideMenuIfClickedOutside)

	}, [])


	useEffect(() => {

		const menu = document.querySelector("#menu") as HTMLElement;
		if (showMenu)
			menu.style.maxHeight = menu.scrollHeight + "px";
		else
			menu.style.maxHeight = "0";
	}, [showMenu])


	return (
		<div style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: "#9c27b0",
			padding: 10
		}}>
			<Link to="/">
				<img
					src={logoImg}
					alt="Aurora Cosmics Logo"
					style={{ cursor: "pointer", height: 45 }}
				/>
			</Link>
			{
				// Show cross icon if we are showing menu, else show hamburger menu
				showMenu ?
					<CloseIcon
						id="menuIcon"
						style={{
							color: "white",
							fontSize: 40,
							cursor: "pointer"
						}}
						onClick={() => setShowMenu(!showMenu)}
					/>
					:
					<MenuIcon
						id="menuIcon"
						style={{
							color: "white",
							fontSize: 40,
							cursor: "pointer"
						}}
						onClick={() => setShowMenu(!showMenu)}
					/>
			}
			<div style={menuStyles} id="menu">
				<Link to="/" style={menuChildrenStyles}>Home</Link>
				<Link to="/discovery_and_features" style={menuChildrenStyles}>Discovery and Features</Link>
				<Link to="/species" style={menuChildrenStyles}>Species</Link>
				<Link to="/order" style={menuChildrenStyles}>Order a Ticket</Link>
				<Link to="/aboutus" style={menuChildrenStyles}>About Us</Link>
			</div>

		</div>
	);

}

export default MenuBar;