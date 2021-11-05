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
				<SpecieDescription
					name="Bonsar Trees"
					type="Plant"
					description="Bonsar trees may look similar to bonsai trees present on Earth but do not underestimate them.
					They are one of the native species that survived supernova explosion.
					They absorb carbon dioxide and release oxygen 20 times faster than plants on Earth.
					They can also produce all fruits and vegetables available on Earth, all year round no matter what the season."
					photo={checkImage}
				/>
			</Route>

			<Route path="/" exact>
				<IntroComponent2 />
			</Route>



		</Switch>
	)
}

export default App;