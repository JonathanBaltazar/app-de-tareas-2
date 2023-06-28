import { useState } from "react";

// ICONS
import { VscAdd } from "react-icons/vsc";

import "../css/styles.css";

function TaskForm({ saveTaskInArray }) {
    let [newTask, setNewTask] = useState("");

    return (
        <form
            className="flex p-4"
            onSubmit={(e) => {
                e.preventDefault();
                saveTaskInArray(newTask);
                setNewTask("");
            }}
        >
            <input
                className="px-4 rounded-full outline-none shadow-lg flex-grow"
                type="text"
                value={newTask}
                placeholder="Guarda tu tarea"
                onChange={(e) => {
                    setNewTask(e.target.value);
                }}
                autoFocus
            />
            <button
                className="ml-2 rounded-full shadow-xl shadow-neutral-300 p-4 text-white text-2xl"
                style={{ backgroundColor: "var(--special-blue)" }}
            >
                <VscAdd />
            </button>
        </form>
    );
}

export default TaskForm;
