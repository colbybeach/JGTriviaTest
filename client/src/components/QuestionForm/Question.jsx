import React from 'react';

export default function Question({ text, id, disabled, textValue, onTextChange, onCheckChange, checked }) {
    return (
        <div className="mb-4">
            <span className="block font-semibold mb-2">
                {text}
            </span>
            <input
                type="text"
                id={id}
                disabled={disabled}
                value={textValue}
                onChange={onTextChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
            />


            <div className="flex items-center mt-2">
                <input
                    type="checkbox"
                    id={`${id}-checkbox`}
                    className="mr-2"
                    checked={checked}
                    onChange={onCheckChange}
                    disabled={disabled}
                />
                Clown?
            </div>
        </div>
    );
}
