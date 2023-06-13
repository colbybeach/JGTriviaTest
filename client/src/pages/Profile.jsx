import React from 'react'
import BasicContainer from '../components/Containers/BasicContainer'
import EditableTable from '../components/Table/EditableTable'

export default function Profile() {
  return (
    <BasicContainer content={
      <>
    
        - Profile Picture, Email, total Points, Clown points, day streak?, yesterday stats

        <EditableTable />
    
      </>
    }/>
  )
}
