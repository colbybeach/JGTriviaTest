import React from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'
import BasicTable from '../../components/Table/BasicTable';

export default function OverallLeaderboard() {
const leaderboardData = [
    { rank: 1, name: 'John', score: 100 },
    { rank: 2, name: 'Jane', score: 90 },
    { rank: 3, name: 'Alex', score: 80 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },
    { rank: 4, name: 'Sarah', score: 70 },

];

  return (
    <BasicContainer title="Overall Leaderboard" content={
      
        <BasicTable data={leaderboardData} edit={false} editKeys={[]} rowsPerPage={10}/>

    }/>
  )
}
