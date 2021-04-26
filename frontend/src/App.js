import { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
	ProductScreen,
	HomeScreen,
	CartScreen,
	Navbar,
	Backdrop,
} from "./components";
import SideDrawer from "./components/SideDrawer/SideDrawer";

const App = () => {
	const [sideToggle, setSideToggle] = useState(false);
	return (
		<div className="app">
			<Navbar click={() => setSideToggle(true)} />
			<SideDrawer show={sideToggle} />
			<Backdrop show={sideToggle} click={() => setSideToggle(false)} />

			<main>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/product/:id" component={ProductScreen} />
					<Route exact path="/cart" component={CartScreen} />
				</Switch>
			</main>
			{/**Home Screen */}
			{/**Product */}
			{/**CArt */}
		</div>
	);
};

export default App;
