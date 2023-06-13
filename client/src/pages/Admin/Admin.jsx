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

      <button className={"mx-3 btn " + (active === 0 ? "btn-primary" : "btn-outline")} onClick={() => setActive(0)}>
        Manage Questions
      </button>

      <button className={"mx-3 btn " + (active === 1 ? "btn-primary" : "btn-outline")} onClick={() => setActive(1)}>
        Users
      </button>

      <button className={"mx-3 btn " + (active === 2 ? "btn-primary" : "btn-outline")} onClick={() => setActive(2)}>
        Today's Responses
      </button>

      {active === 0 ? 
      <ManageQuestions /> :
      active === 1 ? <ManageUsers /> : 
      <TodaysResponses/>
      }

    </div>


  )
}
