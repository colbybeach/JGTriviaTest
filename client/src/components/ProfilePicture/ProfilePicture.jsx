import React from 'react'

export default function ProfilePicture({image}) {
  return (
    <div className="w-32 h-32 rounded-full border-2 border-secondary overflow-hidden">
        <img src={image} alt="Profile" className="w-full h-full object-cover" />
    </div>
  )
}
