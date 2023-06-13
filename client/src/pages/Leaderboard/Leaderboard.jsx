
import React, { useState } from 'react'
import BasicButton from '../../components/Buttons/BasicButton'
import YesterdaysResults from './YesterdaysResults';
import OverallLeaderboard from './OverallLeaderboard';

export default function Leaderboard() {


  const [active, setActive] = useState(0);

  return (
    <div>
      <BasicButton text="Yesterday's Results" active={active === 0} onClick={() => setActive(0)}/>
      <BasicButton text="Overall Leaderboard" active={active === 1} onClick={() => setActive(1)}/>

      {active === 0 ? 
      <YesterdaysResults /> :
      <OverallLeaderboard /> 
      }

    </div>


  )
}

