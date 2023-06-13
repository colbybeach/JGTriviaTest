
import React, { useState } from 'react'
import YesterdaysResults from './YesterdaysResults';
import OverallLeaderboard from './OverallLeaderboard';

export default function Leaderboard() {


  const [active, setActive] = useState(0);

  return (
    <div>

      <button className={"mx-3 btn " + (active === 0 ? "btn-primary" : "btn-outline")} onClick={() => setActive(0)}>
        Yestery's Results
      </button>

      <button className={"btn " + (active === 1 ? "btn-primary" : "btn-outline")} onClick={() => setActive(1)}>
        Overall Leaderboard
      </button>

      {active === 0 ? 
        <YesterdaysResults /> 
      :
        <OverallLeaderboard /> 
      }

    </div>


  )
}

