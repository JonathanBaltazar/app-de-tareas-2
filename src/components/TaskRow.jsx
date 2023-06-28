// MATERIAL UI
import { Checkbox } from "@mui/material";

// COMPONENTS
import EditTask from "./EditTask";
import OptionsButton from "./OptionsButton";

// ICONS
import { VscChromeClose } from "react-icons/vsc";

function TaskRow({ taskItem, changeTaskState, editTask, deleteTask }) {
    return (
        <li className="flex p-2 mx-4 mb-4 items-center rounded-md shadow-xl bg-white">
            <Checkbox
                onClick={() => {
                    changeTaskState(taskItem.id);
                }}
                defaultChecked={taskItem.done ? true : false}
            />
            <p className="flex-grow">{taskItem.name}</p>

            <div className="flex items-center">
                {/* <EditTask editTask={editTask} taskItem={taskItem} />
                 */}
                <OptionsButton
                    taskItem={taskItem}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            </div>
        </li>
    );
}

export default TaskRow;
