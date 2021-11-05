import Typography from "@material-ui/core/Typography";

import IntroComponent1 from "./components/IntroComponent1";
import IntroComponent2 from "./components/IntroComponent2";
import BookTicket from "./components/BookTicket";
import AboutUs from "./components/AboutUs";
import FounderArray from "./components/FounderArray";


import { Switch, Route } from "react-router-dom";


import "./styles/styles.css";
import checkImage from "./images/check.jpeg";
import rizwanImage from "./images/rizwan.jpg";
import SpecieDescription from "./components/SpecieDescription";

// Specie images
import electrarTree from "./images/ElectrarTree.png";
import ramosar from "./images/ramosar.png"


const App = () => {
	return (
		<Switch>

			<Route path="/aboutus" exact>
				<AboutUs />
				<FounderArray
					founders={[
						{
							founderName: "Mohid Raza",
							founderImage: checkImage,
						},
						{
							founderName: "Rizwan Mustafa",
							founderImage: rizwanImage,
						}
					]}
				/>
			</Route>

			<Route path="/order" exact>
				<BookTicket />
			</Route>

			<Route path="/species" exact>
				<Typography
					variant="h2"
					component="h1"
					color="secondary"
					style={{ textAlign: "center", margin: "30px 0" }}
				><b>Native Species of Moriz</b></Typography>

				<SpecieDescription
					name="Bonsar Trees"
					type="Plant"
					description="Bonsar trees may look similar to bonsai trees present on Earth but do not underestimate them.
					They are one of the native species that survived supernova explosion.
					They absorb carbon dioxide and release oxygen 20 times faster than plants on Earth.
					They can also produce all fruits and vegetables available on Earth, all year round no matter what the season."
					photo={checkImage}
				/>

				<SpecieDescription
					name="Electrar Trees"
					type="Plant"
					description="Electrar trees may look like something out of a sci-fi movie, but they are a reality.
					Scientists have deduced that the electrar trees only produced light before the supernova explosion but now they also produce electricity, thanks to a mutation in their DNA due to the explosion. 
					Their black part is what performs photosynthesis and it absorbs 100% of the energy provided by sun which means it is extremely efficient."
					photo={electrarTree}
				/>

				<SpecieDescription
					name="Ramosar"
					type="Animal"
					description="Seems like alien movies were right after all. 
					Ramosar is an alien spcies that unfortunately did not survive the supernova explosion.
					However, there is no need to panic.
					Ramosar may look frightening but scientists have discovered that they are way weaker than humans, physically and mentally.
					Scientists have also deduced that while the explosion took place, Ramosars were actually fighting each other which indicates the possibility of a civil war."
					attribution={
						<>Image by <a href='https://pixabay.com/users/anaterate-2348028/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3317701'>Wolfgang Eckert</a> from <a href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3317701'>Pixabay</a></>
					}
					photo={ramosar}
				/>
			</Route>

			<Route path="/" exact>
				<IntroComponent2 />
			</Route>



		</Switch>
	)
}

export default App;