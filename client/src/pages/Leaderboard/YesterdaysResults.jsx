import React from 'react'
import QuestionAndAnswerBox from '../../components/Leaderboard/QuestionAndAnswerBox'

export default function YesterdaysResults() {

    const questionData = [
        { question: "What is the capital of the Bahamas", answer: 'Nassau', percentage: "35.5", clowns: ["The beach - CBeach", "BahamaMama - Dschuldt"]},
        { question: "What is the capital of the Bahamas", answer: 'Nassau', percentage: "35.5", clowns: ["The beach - CBeach", "BahamaMama - Dschuldt"]},
        { question: "What is the capital of the Bahamas", answer: 'Nassau', percentage: "35.5", clowns: ["The beach - CBeach", "BahamaMama - Dschuldt"]},
        { question: "What is the capital of the Bahamas", answer: 'Nassau', percentage: "35.5", clowns: ["The beach - CBeach", "BahamaMama - Dschuldt"]},
    ];


  return (
    <div className='flex flex-wrap'>
    
        {questionData.map((item) => (
            <QuestionAndAnswerBox question={item.question} answer={item.answer} percentage={item.percentage} clowns={item.clowns}/>
        ))}

    </div>
  )
}
