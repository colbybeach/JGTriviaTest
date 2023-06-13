import React, { useState } from 'react'
import BasicContainer from '../Containers/BasicContainer'
import Modal from '../Modal/Modal';

export default function QuestionAndAnswerBox({ question, answer, percentage, clowns }) {


    const [isModalOpen, setModalOpen] = useState(false);


    return (
        <BasicContainer title={question} content={

            <div className='flex flex-col space-y-5'>
                <span className='text-4xl font-bold text-accent'>{answer}</span>
                <span>{percentage}% of people answered this correctly.</span>

                <span className='font-bold'>Clown Attempts:</span>


                {clowns.map((item, index) => (
                    <div>
                        <span className='italic font-light'>{item}</span>
                    </div>
                ))}

                <button className='btn btn-secondary' onClick={() => setModalOpen(true)}>Vote For Clown</button>
            
                <Modal 
                    isOpen={isModalOpen} 
                    closeModal={() => setModalOpen(false)} 
                    title="Vote the clown"
                    content={"I'm a clown!"}
                />

            </div>
        } />
    )
}
