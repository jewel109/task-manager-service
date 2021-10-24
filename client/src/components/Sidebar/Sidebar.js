import React from "react";
import Heading from "./Heading";

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<Heading headingName='Inbox' iconName='bx bx-message' count='3' />
			<Heading
				headingName='Today'
				iconName='bx bx-star'
				count='3'
				dataValue='active'
			/>
			<Heading headingName='Upcoming' iconName='bx bx-check-circle' count='2' />
			<Heading
				headingName='Showmore'
				iconName='bx bxs-chevron-down'
				dataValue='show-more'
			/>
		</div>
	);
};

export default Sidebar;
