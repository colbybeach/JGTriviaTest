import React from 'react'

export default function BasicButton({text, onClick, disabled, type, active}) {
  return (
    <button
        type={type}
        className={"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md m-2 " + (active ? "bg-blue-600" : "bg-blue-500")}
        onClick={onClick}
    >
        {text}
    </button>
  )
}
