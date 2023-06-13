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
                placeholder='Type here...'
                className="w-full input input-bordered input-secondary"
            />


            <div className="flex items-center mt-2">
                <input
                    type="checkbox"
                    id={`${id}-checkbox`}
                    className="mr-2 checkbox" 
                    checked={checked}
                    onChange={onCheckChange}
                    disabled={disabled}
                />
                Clown?
            </div>
        </div>
    );
}
