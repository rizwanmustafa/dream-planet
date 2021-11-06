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
import ParagraphWithHeading from "./components/PargraphWithHeading";


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
					style={{ textAlign: "center", margin: "30px 0", fontWeight: "bold" }}
				>Native Species of Moriz</Typography>

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

			<Route path="/discovery_and_features" exact>
				<Typography
					variant="h2"
					component="h1"
					color="secondary"
					style={{ textAlign: "center", margin: "30px 0", fontWeight: "bold" }}
				>Fabulous Features of Moriz</Typography>

				<ParagraphWithHeading
					heading="Some scientific facts!"	
					body="It is the only discovered planet other than Earth that is suitable for life.
					It is completely covered by land and water is only found deep undergeround.
					Moriz takes 275 days to complete its orbit.
					It takes 24 hours to complete a rotation cycle just like Earth.
					Summer stays for 9 months while winter stays only for 3 months.
					Average temperature at Moriz is 16 celsius.
					Scientists estimate that about 75% of the human population will have shifted to Moriz by 2053."
				/>

				<ParagraphWithHeading
					heading="A magical gas 'Rizmo'"
					body="A magical gas Rizmo has been discovered on the Planet Moriz. 
					It constitutes for 2% of Planet Moriz's atmosphere and its magical properties may leave you surprised just like the scientists who discovered it. 
					This gas kills harmful microbes including bacteria and viruses upon coming in contact with them. 
					Scientists are still figuring out how the magical Rizmo does this but it is absolutely stunning. 
					This gas will allow humans to live on Planet Moriz without getting infected by diseases or pandemics. 
					This magical gas is also the reason behind the iconic purple colour of the planet."
				/>

				<ParagraphWithHeading
					heading="Mostly covered by Trees"
					body="The surface of Planet Moriz is mostly covered by the trees of Bonsar and Electrar. 
					They can be found nearly everywhere. 
					After analyzing, scientists have said that 50.1% of the Planet Moriz's surface is covered by Bonsar Trees and 30.3% is covered by the Electrar Trees.
					Scientists are hoping to use the bonsar trees for extensive agriculture and satisfying the food requirements of the population on Earth.
					Electrar Trees on the other hand will be used to generate and store electricity.
					The electricity will then be provided to the future population and industries of Planet Moriz."
				/>

				<ParagraphWithHeading
					heading="Extremely fertile soil but..."
					body="It has been discovered that the soil of Planet Moriz is extremely fertile and the reason for this is a newly discovered element 'Wanza'.
					This mystical element speeds up the growing process of every plant by up to 20 times and allows them to grow in the soil of Planet Moriz irrespective of the seasons. This is an extremely good news as this will help in satisfying the feeding needs of the human population"
				/>
			</Route>

			<Route path="/" exact>
				<IntroComponent1 />
				<IntroComponent2 />
			</Route>



		</Switch>
	)
}

export default App;