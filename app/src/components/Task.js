import React from 'react';


const Task = ({ children }) => {
    return (
        <div className="bg-dark-gray rounded-md p-2 mb-2 cursor-pointer">
            <p className="text-typo-gray">{children}</p>
        </div>
    );
}

export default Task;
