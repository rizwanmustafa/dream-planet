import Typography from "@material-ui/core/Typography";

import MenuBar from "./components/MenuBar";
import IntroComponent1 from "./components/IntroComponent1";
import IntroComponent2 from "./components/IntroComponent2";
import BookTicket from "./components/BookTicket";
import AboutUs from "./components/AboutUs";
import FounderArray from "./components/FounderArray";


import { Switch, Route, useLocation } from "react-router-dom";


import "./styles/styles.css";
import SpecieDescription from "./components/SpecieDescription";
import ParagraphWithHeading from "./components/PargraphWithHeading";
import ListParagraph from "./components/ListParagraph";
import HeadingParagraphWithPicture from "./components/HeadingParagraphWithPicture";

// Discovery Images
import supernova from "./images/supernova.png"
import spacesuit from "./images/spacesuit.png";
import spacecraft from "./images/spacecraft.png";
// Founder Images
import rizwanImage from "./images/rizwan.jpg";
import mohidImage from "./images/mohid.jpg";
// Species Images
import bonsarTree from "./images/bonsar-tree.png";
import electrarTree from "./images/ElectrarTree.png";
import ramosar from "./images/ramosar.png"
// Tourist Attraction Images
import valeImage from "./images/vale.png";
import fallImage from "./images/Fall.png";

// For media queries
import { useState, useEffect } from "react";
import CopyrightStrip from "./components/CopyrightStrip";
import ClassicHeading from "./components/ClassicHeading";


const App = () => {
	// Initially set the mobile mode and update mobile mode status everytime the screen size changes
	const [mobileMode, setMobileMode] = useState<boolean>(window.matchMedia("(max-width: 425px)").matches)
	window.matchMedia("(max-width: 425px)").addEventListener("change", e => setMobileMode(e.matches))

	// Initially set the tablet mode and update tablet mode status everytime the screen size changes
	const [tabletMode, setTabletMode] = useState<boolean>(window.matchMedia("(max-width: 768px)").matches)
	window.matchMedia("(max-width: 768px)").addEventListener("change", e => setTabletMode(e.matches))

	const currentLocation = useLocation();

	useEffect(() => {
		window.scroll({ top: 0, behavior: "smooth" })
	}, [currentLocation.pathname])

	return (
		<>
			<MenuBar />
			<div style={{ paddingTop: 65, backgroundColor: "#9c27b0" }}></div>
			<Switch>

				<Route path="/" exact>
					<IntroComponent1
						mobileMode={mobileMode}
						tabletMode={tabletMode}
					/>
					<IntroComponent2
						mobileMode={mobileMode}
						tabletMode={tabletMode}
					/>
				</Route>

				<Route path="/aboutus" exact>
					<AboutUs />
					<FounderArray
						founders={[
							{
								founderName: "Mohid Raza",
								founderImage: mohidImage,
							},
							{
								founderName: "Rizwan Mustafa",
								founderImage: rizwanImage,
							}
						]}
						tabletMode={tabletMode}
					/>
				</Route>

				<Route path="/order" exact>
					<BookTicket tabletMode={tabletMode} />
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
						photo={bonsarTree}
						tabletMode={tabletMode}
					/>

					<SpecieDescription
						name="Electrar Trees"
						type="Plant"
						description="Electrar trees may look like something out of a sci-fi movie, but they are a reality.
					Scientists have deduced that the electrar trees only produced light before the supernova explosion but now they also produce electricity, thanks to a mutation in their DNA due to the explosion.
					Their black part is what performs photosynthesis and it absorbs 100% of the energy provided by sun which means it is extremely efficient."
						photo={electrarTree}
						tabletMode={tabletMode}
					/>

					<SpecieDescription
						name="Ramosar"
						type="Animal"
						description="Seems like alien movies were right after all.
					Ramosar is an alien spcies that unfortunately did not survive the supernova explosion.
					However, there is no need to panic.
					Ramosar may look frightening but scientists have discovered that they are way weaker than humans, physically and mentally.
					Scientists have also deduced that while the explosion took place, Ramosars were actually fighting each other which indicates the possibility of a civil war."
						photo={ramosar}
						tabletMode={tabletMode}
					/>
				</Route>

				<Route path="/discovery" exact>
					<div style={{
						alignSelf: "center",
						display: "flex",
						flexDirection: "column",
						backgroundColor: "transparent",
						color: "white",
						marginTop: 30,
						padding: 30,
						width: "75vw",
						borderRadius: 10,
						outline: "2px solid #9c27b0"
					}}>
						<Typography
							variant="h2"
							component="h1"
							color="secondary"
							style={{ textAlign: "center", marginBottom: 30, fontWeight: "bold" }}
						>Discovery of Moriz</Typography>
						<div style={{ display: "flex", flexDirection: tabletMode ? "column" : "row" }}>

							<Typography
								style={{
									alignSelf: "center",
									textAlign: "justify",
									fontSize: 23,
									lineHeight: "35px",
									width: !tabletMode ? "60%" : "100%",
									padding: tabletMode ? 10 : "0 40px 0 0",

								}}>
								After a great supernova explosion in Galaxy N-12794, Moriz was propelled in the direction of our galaxy, the Milky Way.
								It took Moriz 190 million light years to reach our galaxy a great great luck.
								Despite there being many planets and asteroids in its way, Moriz somehow miraculously did not hit even a single one of them.
								When Moriz entered the Solar System, NASA's satellites detected it as an "unknown" object.
								Scientists were only able to get clear images of Moriz, once it mystically started orbitting the Sun while remaining between Venus and Earth.
							</Typography>

							<div style={{ width: tabletMode ? "100%" : "40%" }}>
								<img src={supernova} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10, }} alt="Supernova" />
							</div>
						</div>
					</div>
				</Route>

				<Route path="/features" exact>

					<div style={{
						display: "flex",
						alignSelf: "center",
						alignItems: "center",
						flexDirection: "column",
						backgroundColor: "transparent",
						color: "white",
						width: "75vw",

						margin: "50px 10px",
						padding: 30,
						borderRadius: 10,
						outline: "2px solid #9c27b0"

					}}>
						<Typography
							variant="h2"
							component="h1"
							color="secondary"
							style={{ textAlign: "center", margin: "30px 0", fontWeight: "bold" }}
						>Fabulous Features of Moriz</Typography>

						<ListParagraph
							heading="Some scientific facts!"
							listItems={[
								"It is the only discovered planet other than Earth that is suitable for life",
								"It is completely covered by land and water is only found deep undergeround",
								"It's atmospheric composition is extremely similar to Earth except one exception: It contains a new gas called 'Rizmo'",
								"Moriz takes 275 days to complete its orbit",
								"It takes 24 hours to complete a rotation cycle just like Earth",
								"Summer stays for 9 months while winter stays only for 3 months",
								"Average temperature at Moriz is 16 celsius",
								"Scientists estimate that about 75% of the human population will have shifted to Moriz by 2053"

							]}
							tabletMode={tabletMode}
						/>

						<ParagraphWithHeading
							heading="A magical gas 'Rizmo'"
							body="A magical gas Rizmo has been discovered on the Planet Moriz.
						It constitutes for 2% of Planet Moriz's atmosphere and its magical properties may leave you surprised just like the scientists who discovered it.
						This gas kills harmful microbes including bacteria and viruses upon coming in contact with them.
						Scientists are still figuring out how the magical Rizmo does this but it is absolutely stunning.
						This gas will allow humans to live on Planet Moriz without getting infected by diseases or pandemics.
						This magical gas is also the reason behind the iconic purple colour of the planet."
							tabletMode={tabletMode}
						/>

						<ParagraphWithHeading
							heading="Mostly covered by Trees"
							body="The surface of Planet Moriz is mostly covered by the trees of Bonsar and Electrar.
						They can be found nearly everywhere.
						After analyzing, scientists have said that 50.1% of the Planet Moriz's surface is covered by Bonsar Trees and 30.3% is covered by the Electrar Trees.
						Scientists are hoping to use the bonsar trees for extensive agriculture and satisfying the food requirements of the population on Earth.
						Electrar Trees on the other hand will be used to generate and store electricity.
						The electricity will then be provided to the future population and industries of Planet Moriz."
							tabletMode={tabletMode}
						/>

						<ParagraphWithHeading
							heading="Extremely fertile soil"
							body="It has been discovered that the soil of Planet Moriz is extremely fertile and the reason for this is a newly discovered element 'Wanza'.
						This mystical element speeds up the growing process of every plant by up to 20 times and allows them to grow in the soil of Planet Moriz irrespective of the seasons.
						This is an extremely good news as this will help in satisfying the feeding needs of the human population."
							tabletMode={tabletMode}
						/>
					</div>
				</Route>

				<Route path="/tourist_attractions" exact>
					<Typography
						variant="h2"
						component="h1"
						color="secondary"
						style={{ textAlign: "center", margin: "30px 0", fontWeight: "bold" }}
					>Tourist Attractions </Typography>

					<HeadingParagraphWithPicture
						heading="Vale of Volcanoes"
						body="
					The Vale of Volcanoes is a group of 51 volcanoes that exist about fifty kilometres away from the Great Fall of Rismo.
					Only 34 volcanoes in this group are currently active.
					The sight of these volcanoes erupting is bound to shock you with its beauty.
					These volcanoes release 'Rizmo' and lava.
					The lava released from these volcanoes is quite different from the lava released by volcanoes on Earth.
					Since the lava mostly contains 'Wanza', the international government of Moriz has decided to use this lava to create a highly fertile agricultural area about 20 kilometer away from the volcanoes.
					Unlike Earth, these volcanic eruptions do not cause any harm to the environment of Moriz and the humans.  
					"
						picture={valeImage}
						tabletMode={tabletMode}
					/>

					<HeadingParagraphWithPicture
						heading="Great Fall of Rismo"
						body="The Great Fall of Rismo possesses unexplainable glory that stuns its viewers. The waterfall is fed by rain and the magical Rizmo. The 'purple water' then fall down the cliff into an abyss. Scientists are yet to know about the mysteries that lie in the mist below the cliff.
					People are forced to maintain a safe distance from the site to cause any accidents.
					However it can be seen and photographed from a small site close to the picnic area created by the international government of Moriz.
					The fall is sometimes referred to as an ephemeral fall because it can only be seen in mid summers for a brief amount of time."
						picture={fallImage}
						tabletMode={tabletMode}
					/>
				</Route>

			</Switch >
			<CopyrightStrip tabletMode={tabletMode} />
		</>
	)
}

export default App;