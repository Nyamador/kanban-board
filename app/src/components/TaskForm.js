import React from 'react';

import { Input, Button } from './index'


/**
 * 
 * @param {boolean} opened - determines if the form is opened or closed
 * @param {string} value -  value of the input element
 * @param {function} onChange - function called on every keystroke on input element
 * @param {function} onAdd - function called when the add button is clicked
 * @param {function} onCancel - function called when the cancel button is clicked
 * @param {object} ref - ref for focusing the input element when it's mounted
 * 
 * @returns {Component<props>}
 */


const TaskForm = ({ opened, value, onChange, onAdd, onCancel, innerRef }) => {
    return (
        <div className={`${opened ? "block" : "hidden"}`}>
            <div className="bg-dark-gray rounded-md p-2 cursor-pointer">
                <Input name="task_name" value={value} onChange={e => onChange(e)} innerRef={innerRef} type="text" placeholder="Type to enter the name of your task.." />
            </div>

            <div className="flex flex-row">
                <Button variant="primary" onClick={() => onAdd()}>Add</Button>

                <Button onClick={() => onCancel()}>Cancel</Button>
            </div>
        </div>
    );
}

export default TaskForm;
