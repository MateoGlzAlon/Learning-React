import { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"])
    const [newTask, setNewTask] = useState()

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {

    }

    function deleteTask() {

    }

    function moveTaskUp() {

    }

    function moveTaskDown() {

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
                    <button className='delete-button' onClick={deleteTask}>Delete</button>
                    <button className='move-button' onClick={moveTaskUp}>⬆</button>
                    <button className='move-button' onClick={moveTaskDown}>⬇</button>

                </li>)
            }
        </ol>

    </>)

}

export default ToDoList    