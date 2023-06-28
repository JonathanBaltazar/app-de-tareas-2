// COMPONENTS
import TaskRow from "./TaskRow";

function TasksList({ tasksList, changeTaskState, editTask, deleteTask }) {
    let newList = tasksList().map((taskItem) => {
        return (
            <TaskRow
                key={taskItem.id}
                taskItem={taskItem}
                changeTaskState={changeTaskState}
                editTask={editTask}
                deleteTask={deleteTask}
            />
        );
    });
    return (
        <ul className="" style={{ height: "450px", overflow: "scroll" }}>
            {newList.reverse()}
        </ul>
    );
}

export default TasksList;
