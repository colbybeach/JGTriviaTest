import React from 'react'
import BasicContainer from '../Containers/BasicContainer'
import BasicButton from '../Buttons/BasicButton'

export default function QuestionAndAnswerBox({question, answer, percentage, clowns}) {
  return (
    <BasicContainer title={question} content={

        <div className='flex flex-col space-y-5'>
           <span className='text-4xl font-bold text-blue-500'>{answer}</span>
           <span>{percentage}% of people answered this correctly.</span>

           <span className='font-bold'>Clown Attempts:</span>


           {clowns.map((item, index) => (
                <div>
                    <span className='italic font-light'>{item}</span> 
                </div>
            ))}

            <BasicButton text={"Vote For Clown"}/>


        </div>
    }/>
  )
}
