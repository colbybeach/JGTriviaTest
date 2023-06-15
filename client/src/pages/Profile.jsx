import React from 'react'
import BasicContainer from '../components/Containers/BasicContainer'
import ProfilePicture from '../components/ProfilePicture/ProfilePicture'
import shrek from '../resources/profilePic.jpg'
import { Authenticator } from '@aws-amplify/ui-react';

export default function Profile() {


  return (
    <BasicContainer content={
      <div className='flex flex-col items-center justify-center space-y-3'>
    
        <ProfilePicture image={shrek}/>
        <span className='text-2xl'>Shrek The Oger</span>
        <span className='text-accent'>soger@jahnelgroup.com</span>
        <span className='text-xl'>Points: 0</span>
        <span className='text-xl'>Clown Points: 6969696969696969</span>


      <Authenticator>
      {({ signOut }) => (
          <button className="btn btn-primary" onClick={signOut}>Sign out</button>
      )}
      </Authenticator>

    
      </div>
    }/>
  )
}
