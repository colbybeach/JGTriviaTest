import React from 'react'

export default function BasicContainer({title, content}) {
  return (
    <div className="max-w-lg mx-auto bg-base-100 p-8 shadow-md rounded-md m-5">
      
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {content}
    </div>
  )
}
