import React from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'
import EditableTable from '../../components/Table/BasicTable'

export default function ManageUsers() {
  return (
    <div>
       <BasicContainer title={"All Users"} content={
        <>
          
            <EditableTable />

        </>
    }/>
    </div>
  )
}
