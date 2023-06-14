import React, { useState } from 'react'
import BasicContainer from '../Containers/BasicContainer'
import Modal from '../Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';

export default function QuestionAndAnswerBox({ question, answer, percentage, clowns }) {


    const handleVote = (event) => {
        event.preventDefault();

        // Perform form submission logic here

        setModalOpen(false);
        setSubmitted(true);


        //Check to make sure we are actually getting the values.
        //        console.log(clownSelected);


        //Success toast
        toast.success('Clown Chosen!');
    };

    const [isModalOpen, setModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [clownSelected, setClownSelected] = useState("");


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

                <button className='btn btn-secondary' disabled={submitted} onClick={() => setModalOpen(true)}>Vote For Clown</button>
            
                <Modal 
                    isOpen={isModalOpen} 
                    closeModal={() => setModalOpen(false)} 
                    title="Vote the clown"
                    content={
                        <>
                            <select className='select select-accent w-full max-w-xs' onChange={(e) => setClownSelected(e.target.value)}>
                                <option disabled selected>Pick your favorite Clown</option>
                                {clowns.map((item, index) => (  
                                    <option>{item}</option>
                                ))}
                            </select>
                        </>

                    }
                    secondActionTitle={"Vote For Clown"}
                    secondAction={clownSelected !== "" ? handleVote : () => {}}
                />

                <ToastContainer position="top-center" autoClose={500} hideProgressBar />

            </div>
        } />
    )
}
