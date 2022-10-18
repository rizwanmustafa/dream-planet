import { useState, useEffect, CSSProperties } from "react";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";

// Icons
import Hamburger from "hamburger-react";
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
		transition: "max-height 0.5s ease-in-out, border 0.5s ease-in-out",
		WebkitBoxShadow: "0px 0px 9px 3px #9c27b0",
		MozBoxShadow: "0px 0px 9px 3px #9c27b0",
		boxShadow: "0px 0px 9px 3px #9c27b0",
	}

	const menuChildrenStyles: CSSProperties = {
		padding: "15px 20px",
		textDecoration: "none",
		color: "#9c27b0",
		// 
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
		if (showMenu) {
			menu.style.display = "flex";
			menu.style.maxHeight = menu.scrollHeight + "px";
			menu.style.border = "2px solid #9c27b0"
		}
		else {
			menu.style.display = "none";
			menu.style.maxHeight = "0";
			menu.style.border = "0px solid #9c27b0";
		}
	}, [showMenu])


	return (
		<div style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: "#9c27b0",
			padding: 10,
			zIndex: 3,
			position: "fixed",
			width: "99%",
			textAlign: "right",
		}}>
			<Link to="/">
				<img
					src={logoImg}
					alt="Aurora Cosmics Logo"
					style={{ cursor: "pointer", height: 45 }}
				/>
			</Link>
			{
				<span id="menuIcon" style={{ paddingRight: 15 }}>
					<Hamburger toggled={showMenu} toggle={setShowMenu} color="white" direction="right"/>
				</span>
			}
			<div style={menuStyles} id="menu">
				<Link to="/" style={menuChildrenStyles}>Home</Link>
				<Link to="/discovery" style={menuChildrenStyles}>Discovery</Link>
				<Link to="/features" style={menuChildrenStyles}>Features</Link>
				<Link to="/species" style={menuChildrenStyles}>Species</Link>
				<Link to="/tourist_attractions" style={menuChildrenStyles}>Tourist Attractions</Link>
				<Link to="/order" style={menuChildrenStyles}>Order a Ticket</Link>
				<Link to="/aboutus" style={menuChildrenStyles}>About Us</Link>
			</div>

		</div>
	);

}

export default MenuBar;