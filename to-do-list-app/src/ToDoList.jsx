import { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"])
    const [newTask, setNewTask] = useState()

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask])
            setNewTask("")
        }

    }

    function deleteTask(index) {

        setTasks(tasks.filter((_, i) => i !== index))

    }

    function moveTaskUp(index) {

        const updatedTasks = [...tasks];

        if (index > 0) {
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }

    function moveTaskDown(index) {
        const updatedTasks = [...tasks];

        if (index < updatedTasks.length) {
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }


    return (<>

        <div className="to-do-list">

            <h1>ToDo List</h1>
            <div>
                <input type='text' placeholder='Enter a task...'
                    value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>
                    Add Task
                </button>
            </div>

        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-button' onClick={() => moveTaskUp(index)}>⬆</button>
                    <button className='move-button' onClick={() => moveTaskDown(index)}>⬇</button>
                </li>)
            }
        </ol>

    </>)

}

export default ToDoList    