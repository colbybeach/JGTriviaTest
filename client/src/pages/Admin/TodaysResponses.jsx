import React from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'

export default function TodaysResponses() {
  return (
    <div className='w-full'>


        <BasicContainer title={"Need To Be Decided"} content={
            <>
              Paginated table with sorting for confidence with the ability to choose right or wrong.  
            </>

        }/>

        <div className='flex'>

            <BasicContainer title={"Clown Responses"} content={
                <>
                    Shows all clown responses in paginated table with the ability to choose right or wrong (maybe icon pencil to change).

                </>

            }/>

            <BasicContainer title={"All Responses"} content={
                <>
                    Shows all real responses in paginated table with the ability to choose right or wrong (maybe icon pencil to change).
                </>

            }/>
        </div>
      
      
    </div>
  )
}
