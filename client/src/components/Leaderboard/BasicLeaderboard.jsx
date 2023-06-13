import React from 'react'

export default function BasicLeaderboard({data}) {
  return (
    <table className="w-full border-collapse">
        
        <thead>
            <tr className='rounded-md bg-blue-500 text-white'>
                <th className="py-3 px-4 font-semibold text-left">Rank</th>
                <th className="py-3 px-4  font-semibold text-left">Name</th>
                <th className="py-3 px-4 font-semibold text-left">Score</th>
            </tr>
        </thead>


        <tbody>
            {data.map((item) => (
                <tr key={item.rank}>
                    <td className="py-2 px-4 border-b">{item.rank}</td>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.score}</td>
                </tr>
            ))}
        </tbody>

    </table>
  )
}
