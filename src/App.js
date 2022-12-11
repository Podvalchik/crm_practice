import React from "react";
import "./App.css";
import GreyRectangle from "./components/grey_rectangle/GreyRectangle";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
const App = (props) => {
	return (
		<div className="app-wrapper">
			<Navbar/>
			<div className="page-wrapper">
				<Header/>
				<div className="rectangle-middle">
					<GreyRectangle data = {props.data}/>
				</div>
			</div>
			{/*<div className="app-wrapper-content">*/}
			{/*	<Routes>*/}
			{/*		<Route path="/" element={<GreyRectangle/>}/>*/}
			{/*	</Routes>*/}
			{/*</div>*/}
		</div>
	);
};

export default App;
