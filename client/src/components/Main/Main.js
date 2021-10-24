import React from "react";
import TaskDate from "./TaskDate";
import Tasklists from "./Tasklists";
import TaskTags  from "./TaskTags";

const Main = () => {
	return (
		<div className='main-for-task'>
			<TaskDate Day='Today' />
			<TaskTags />
			<Tasklists/>
		</div>
	);
};

export default Main;
