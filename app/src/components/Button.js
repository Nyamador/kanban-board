import React from 'react';

const Button = ({ variant, onClick, children }) => {
    return <button onClick={onClick} className={`p-2 rounded-md w-3/12 mt-4 mb-2 ${variant === "primary" ? "text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" : "text-typo-gray bg-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50"}`}>
        {children}
    </button>
}

export default Button;
