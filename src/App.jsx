import { useState, useEffect } from "react";
import "./css/build.css";

// import "./dist/output.css";

import { v4 as uuidv4 } from "uuid";

// CUSTOM STYLES
import "./css/styles.css";

// COMPONENTS
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
// import TaskRow from "./components/TaskRow";
import Button from "./components/Button";
// import OptionItem from "./components/OptionItem";
import OptionsMenu from "./components/OptionsMenu";

function App() {
    // useState, es asincrono
    let [tasks, setTasks] = useState([]);
    let [showNotDone, setShowNotDone] = useState(true);

    function saveTaskInArray(task) {
        if (task.length > 0) {
            let taskFounded = tasks.filter((taskItem) => {
                return taskItem.name == task;
            });
            if (taskFounded.length > 0) {
                alert("Ya tienes una tarea con este nombre!");
            } else {
                setTasks([...tasks, { id: task, name: task, done: false }]);
            }
        }
    }

    function editTask(id, taskUpdated) {
        let newList = tasks.map((task) => {
            if (task.id == id) {
                return { id: id, name: taskUpdated, done: task.done };
            } else {
                return task;
            }
        });
        setTasks(newList);
    }

    function deleteTask(id) {
        let newList = tasks.filter((taskItem) => taskItem.id != id);
        setTasks(newList);
    }

    function changeTaskState(id) {
        let newList = tasks.map((task) => {
            if (task.id == id) {
                return { id: task.id, name: task.name, done: !task.done };
            } else {
                return task;
            }
        });
        setTasks(newList);
    }

    function getTasksNotDone() {
        let tasksNotDone = tasks.filter((task) => task.done == false);
        return tasksNotDone;
    }

    function getTasksDone() {
        let tasksDone = tasks.filter((task) => task.done == true);
        return tasksDone;
    }

    // Delete done tasks
    function deleteDoneTasks() {
        let newList = tasks.filter((taskItem) => taskItem.done == false);
        setTasks(newList);
    }

    useEffect(() => {
        // TOMA LOS DATOS ANTES DE QUE EL SEGUNDO useEffect se ejecute
        if (JSON.parse(localStorage.getItem("tasks"))) {
            let tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
            setTasks(tasksFromStorage);
        } else {
            setTasks([]);
        }
    }, []);

    useEffect(() => {
        // PARA CUANDO SE EJECUTE ESTE useEffect, tasks YA NO DEBERIA SER UN ARREGLO VACIO!
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div
            id="container"
            className="2xl:w-1/2 xl:w-3/5 lg:w-3/5 md:w-5/6 sm:w-11/12 w-11/12 m-auto mt-5 sm:mt-20 bg-neutral-100 shadow-xl rounded-xl"
        >
            <TaskForm saveTaskInArray={saveTaskInArray} />

            <div id="btns" className="p-4 flex justify-between">
                <div>
                    <Button
                        nameBtn="Pendientes"
                        setShowNotDone={setShowNotDone}
                        listState={true}
                        btnStyles={
                            showNotDone ? "clicked-btn" : "not-clicked-btn"
                        }
                    />
                    <Button
                        nameBtn="Hechas"
                        setShowNotDone={setShowNotDone}
                        listState={false}
                        btnStyles={
                            !showNotDone ? "clicked-btn" : "not-clicked-btn"
                        }
                    />
                </div>
                {!showNotDone ? (
                    <OptionsMenu
                        itemName="Limpiar tareas"
                        itemFunction={deleteDoneTasks}
                    />
                ) : null}
            </div>
            {showNotDone ? (
                <TasksList
                    tasksList={getTasksNotDone}
                    changeTaskState={changeTaskState}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ) : null}
            {!showNotDone ? (
                <TasksList
                    tasksList={getTasksDone}
                    changeTaskState={changeTaskState}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ) : null}
        </div>
    );
}

export default App;
