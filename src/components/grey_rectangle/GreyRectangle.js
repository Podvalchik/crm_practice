import React from "react";
import "./GreyRectangle.scss";
import Applications_table from "../application_table/Applications";

const GreyRectangle = (props) => {
	return (
		<div className='rectangle'>
			<Applications_table data = {props.data}/>
		</div>
	);
};

export default GreyRectangle;
