import React, { useState } from 'react'
import BasicButton from '../../components/Buttons/BasicButton'
import BasicContainer from '../../components/Containers/BasicContainer'
import ManageQuestions from './ManageQuestions';
import ManageUsers from './ManageUsers';
import TodaysResponses from './TodaysResponses';

export default function Admin() {


  const [active, setActive] = useState(0);

  return (
    <div>
      <BasicButton text="Manage Questions" active={active === 0} onClick={() => setActive(0)}/>
      <BasicButton text="Users" active={active === 1} onClick={() => setActive(1)}/>
      <BasicButton text="Today's Reponses" active={active === 2} onClick={() => setActive(2)}/>

      {active === 0 ? 
      <ManageQuestions /> :
      active === 1 ? <ManageUsers /> : 
      <TodaysResponses/>
      }

    </div>


  )
}
