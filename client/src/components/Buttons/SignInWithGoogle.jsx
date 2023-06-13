import React from 'react'

export default function SignInWithGoogle({onClick}) {
  return (
    <button type="button" className="login-with-google-btn" onClick={onClick}>
        Sign in with Google
    </button>
  )
}
