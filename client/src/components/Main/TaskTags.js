import React from "react";
import TaskTag from "./TaskTag";

const TaskTags = () => {
	const taskTags = ["UX  Research", "All", "Design Spirit", "UI Kit"];

	return (
		<div className="task-tags">
			{taskTags.map((tasktag) => (
				<TaskTag taskTag={tasktag} />
			))}
		</div>
	);
};

export default TaskTags;
