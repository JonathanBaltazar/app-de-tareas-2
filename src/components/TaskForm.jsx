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
                className="p-4 rounded-full outline-none shadow-lg flex-grow w-full"
                type="text"
                value={newTask}
                placeholder="Guarda tu tarea"
                onChange={(e) => {
                    setNewTask(e.target.value);
                }}
                autoFocus
            />
            <button
                className="ml-2 rounded-full shadow-xl shadow-neutral-300 text-white text-2xl p-4 hidden sm:block"
                // sm:block
                style={{ backgroundColor: "var(--special-blue)" }}
            >
                <VscAdd />
            </button>
        </form>
    );
}

export default TaskForm;
