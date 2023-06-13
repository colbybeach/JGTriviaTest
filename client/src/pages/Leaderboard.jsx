import React from 'react';

const leaderboardData = [
  { rank: 1, name: 'John', score: 100 },
  { rank: 2, name: 'Jane', score: 90 },
  { rank: 3, name: 'Alex', score: 80 },
  { rank: 4, name: 'Sarah', score: 70 },
];

export default function Leaderboard() {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className='rounded-md bg-blue-500 text-white'>
            <th className="py-3 px-4 font-semibold text-left">Rank</th>
            <th className="py-3 px-4  font-semibold text-left">Name</th>
            <th className="py-3 px-4 font-semibold text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item) => (
            <tr key={item.rank}>
              <td className="py-2 px-4 border-b">{item.rank}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
