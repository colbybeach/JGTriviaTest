import React from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'
import EditableTable from '../../components/Table/BasicTable'
import BasicTable from '../../components/Table/BasicTable';

export default function ManageUsers() {
  
  const data = [
    { id: '1', name: 'John Doe', age: '25', email: 'johndoe@example.com' },
    { id: '2', name: 'Jane Smith', age: '30', email: 'janesmith@example.com' },
    { id: '3', name: 'Bob Johnson', age: '35', email: 'bobjohnson@example.com' },
    { id: '4', name: 'Alice Williams', age: '28', email: 'alicewilliams@example.com' },
    { id: '5', name: 'Mike Brown', age: '32', email: 'mikebrown@example.com' },
    // Add more rows as needed
  ];

  const editKeys = [1, 2, 3]

  return (
    <div>
       <BasicContainer title={"All Users"} content={
        <>
          
          <BasicTable edit={true} data={data} editKeys={editKeys} rowsPerPage={3}/>

        </>
    }/>
    </div>
  )
}
