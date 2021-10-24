import React from "react";

const Heading = ({ iconName, headingName,count ,dataValue}) => {
	return (
		<div className="heading" data-value={dataValue}>
			<div>
				<i className={iconName}></i>
				<h4>{headingName}</h4>
			</div>
			<h4 className="count">
				{count}
			</h4>
		</div>
	);
};

export default Heading;
