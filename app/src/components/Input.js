import React from 'react';

const Input = ({ innerRef, ...props }) => {

    return (
        <div>
            <input {...props} ref={innerRef} className="bg-dark-gray min-w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-dark-gray focus:border-transparent text-white" />
        </div>
    );
}

export default Input;
