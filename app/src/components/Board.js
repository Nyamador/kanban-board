import React, { useState, useRef, useEffect } from 'react';

import { Task, TaskForm } from './index'
import { getItemfromLocalStorage, setLocalStorageItem } from '../localStorage'

/**
 * 
 * @param {number} id - unique identifier of the board
 * @param {string} title - name of the board
 * @param {array} tasks - an array of objects containing tasks
 * 
 * @returns {Component<props>}
 */

const Board = ({ id, title, tasks }) => {
    const [newTaskFormOpened, setNewTaskFormOpened] = useState(false)
    const [newTaskValue, setNewTaskValue] = useState('')
    const [taskList, setTaskList] = useState([...tasks])

    const taskNameInputRef = useRef(null)

    useEffect(() => {
        if (taskNameInputRef.current) {
            taskNameInputRef.current.focus();
        }
    }, [newTaskFormOpened]);


    useEffect(() => {
        let localStorageData = getItemfromLocalStorage('boards')
        const boardIndex = localStorageData.findIndex(item => item.id === id)
        localStorageData[boardIndex] = { id, boardTitle: title, tasks: taskList }
        setLocalStorageItem('boards', localStorageData)
    }, [taskList])

    const closeAddCardForm = () => setNewTaskFormOpened(false)

    const handleNewTaskAddition = () => {
        setTaskList([
            ...taskList,
            {
                name: newTaskValue,
                id: Math.random().toString().split('.')[1]
            }]
        )
        setNewTaskValue('')
        closeAddCardForm()
    }

    const handleDragEnd = index => {
        const tasks = taskList
        tasks.splice(index, 1)
        setTaskList([...tasks])
    }

    const handleAddCardClick = () => {
        setNewTaskFormOpened(true)
    }


    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        const droppedItem = e.dataTransfer.getData("drag-item");
        const droppedItemObject = JSON.parse(droppedItem)

        if (droppedItem.boardId === id) {
            return
        } else {
            setTaskList([
                ...taskList,
                {
                    id: droppedItemObject.id + 1,
                    name: droppedItemObject.name,
                    boardId: droppedItemObject.boardId
                }])
        }
    }



    return (
        <div className="flex flex-col bg-light-gray w-60 px-2 rounded-sm board-container min-h-0 overflow-y scroll"
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}>

            <p className="p-2 text-white font-bold">{title}</p>

            {taskList.map((task, index) =>
                <Task
                    boardId={id}
                    id={task.id}
                    key={task.id}
                    dragEnd={() => handleDragEnd(index)}
                    name={task.name}
                />
            )}

            <TaskForm
                opened={newTaskFormOpened}
                innerRef={taskNameInputRef}
                value={newTaskValue}
                onChange={e => setNewTaskValue(e.target.value)}
                onAdd={handleNewTaskAddition}
                onCancel={closeAddCardForm}
            />

            <div className="p-2 cursor-pointer mt-auto justify-self-end" onClick={() => handleAddCardClick()}>
                <p className="text-gray-300 p-2">+ Add a card</p>
            </div>
        </div>
    );
}

export default Board;
