import React from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'
import BasicTable from '../../components/Table/BasicTable'

export default function TodaysResponses() {

    const answers = [

        {id: 1, qid: 1, username: "cbeach", answer: "Paris", confidence: "98%", correct: "True"},
        {id: 2, qid: 1, username: "cbeach", answer: "Paris", confidence: "98%", correct: "True"},
        {id: 3, qid: 1, username: "cbeach", answer: "Paris", confidence: "98%", correct: "True"},
        {id: 4, qid: 1, username: "cbeach", answer: "Paris", confidence: "98%", correct: "True"},
        {id: 5, qid: 1, username: "cbeach", answer: "Paris", confidence: "98%", correct: "True"},
        {id: 6, qid: 1, username: "cbeach", answer: "Paris", confidence: "98%", correct: "True"}
    ]


  return (
    <div className='w-full'>


        <BasicContainer title={"Need To Be Decided"} content={
            <>
              <BasicTable edit={true} data={answers} rowsPerPage={4} editKeys={[5]}/>
            </>

        }/>

        <div className='flex'>

            <BasicContainer title={"Clown Responses"} content={
                <>
                    <BasicTable edit={false} data={answers} rowsPerPage={4} editKeys={[5]}/>

                </>

            }/>

            <BasicContainer title={"All Responses"} content={
                <>
                    <BasicTable edit={true} data={answers} rowsPerPage={4} editKeys={[5]}/>
                </>

            }/>
        </div>
      
      
    </div>
  )
}
