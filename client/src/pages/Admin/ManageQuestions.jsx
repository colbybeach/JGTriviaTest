import React, { useState } from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'
import BasicTable from '../../components/Table/BasicTable';

export default function ManageQuestions() {

    const [randomSelect, setRandomSelect] = useState(true);

    const triviaQuestions = [
        {
          id: 1,
          text: "What is the capital of France?",
          answer: "Paris",
          level: "Easy",
          category: "Geography"
        },
        {
          id: 2,
          text: "What is the symbol for the element Iron?",
          answer: "Fe",
          level: "Medium",
          category: "Science"
        },
        // Add more trivia questions as needed
      ];
    
      const editKeys = [1,2,3,4]


    return (
        <div className='w-full'>


            <div className='flex'>
                <BasicContainer title={"Tomorrows Questions"} content={
                    <>
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                id={"randomSelect"}
                                className="mr-2 checkbox"
                                checked={randomSelect}
                                onChange={(e) => setRandomSelect(e.target.checked)}
                            />
                            Randomly Generated
                        </div>

                       <BasicTable edit={false} data={triviaQuestions} editKeys={editKeys} rowsPerPage={5} />

                    </>

                } />

                <BasicContainer title={"Todays Questions"} content={
                    <>
                       <BasicTable edit={true} data={triviaQuestions} editKeys={editKeys} rowsPerPage={5} />
                    </>

                } />

            </div>

            <BasicContainer title={"All Questions"} content={
                <>
                    <BasicTable edit={true} data={triviaQuestions} editKeys={editKeys} rowsPerPage={5} />
                </>

            } />

        </div>
    )
}
