import React, { useState } from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'

export default function ManageQuestions() {

    const [randomSelect, setRandomSelect] = useState(true);


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

                        TABLE (if unchecked make it editable)

                    </>

                } />

                <BasicContainer title={"Todays Questions"} content={
                    <>
                        Editable Table With Questions.
                    </>

                } />

            </div>

            <BasicContainer title={"All Questions"} content={
                <>
                    Large Paginated Table with all questions/data.
                </>

            } />

        </div>
    )
}
