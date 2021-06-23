import React, { useState, useRef, useEffect } from 'react';

import { Task, Button, Input } from './index'

const Board = ({ title, tasks }) => {
    const [newTaskFormOpened, setNewTaskFormOpened] = useState(false)

    const taskNameInputRef = useRef(null)

    useEffect(() => {
        if (taskNameInputRef.current) {
            taskNameInputRef.current.focus();
        }
    }, [newTaskFormOpened]);


    const handleAddCardClick = () => {
        setNewTaskFormOpened(true)
    }

    const closeAddCardForm = () => setNewTaskFormOpened(false)


    return (
        <div className="bg-light-gray w-60 px-2 rounded-sm board-container">
            <p className="p-2 text-white font-bold">{title}</p>

            {tasks.map(task => <Task>{task}</Task>)}

            <div className={`${newTaskFormOpened ? "block" : "hidden"}`}>
                <div className="bg-dark-gray rounded-md p-2 cursor-pointer">
                    <Input name="Desmond" innerRef={taskNameInputRef} type="text" placeholder="Type to enter the name of your task.." />
                </div>

                <div className="flex flex-row">
                    <Button variant="primary">Add</Button>

                    <Button onClick={() => closeAddCardForm()}>Cancel</Button>
                </div>
            </div>


            <div className="p-2 cursor-pointer" onClick={() => handleAddCardClick()}>
                <p className="text-gray-300 p-2">+ Add a card</p>
            </div>
        </div>
    );
}

export default Board;
