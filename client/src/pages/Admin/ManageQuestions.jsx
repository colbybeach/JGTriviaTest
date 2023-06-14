import React, { useState } from 'react'
import BasicContainer from '../../components/Containers/BasicContainer'
import BasicTable from '../../components/Table/BasicTable';
import Modal from '../../components/Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';

export default function ManageQuestions() {

    const [randomSelect, setRandomSelect] = useState(true);
    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
    const [check, setcheck] = useState(true);
    const [isSelectModalOpen, setSelectModalOpen] = useState(false);


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



      const handleSelect = (event) => {
        event.preventDefault();

        // Perform form submission logic here

        setSelectModalOpen(false);

        //Success toast
        toast.success('Question Added!');
    };

    const handleConfirm = (event) => {
        event.preventDefault();

        setcheck(!check);
        setConfirmModalOpen(false);
        setRandomSelect(!randomSelect);
    };


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
                                checked={check}
                                onChange={(e) => {e.target.value === "on" && setConfirmModalOpen(true)}}
                            />
                            Randomly Generated
                        </div>
                    
                        {randomSelect ? 

                            <BasicTable edit={false} data={triviaQuestions} editKeys={editKeys} rowsPerPage={5} />
                        :
                            <>
                                {/* <BasicTable edit={true} data={[]} editKeys={editKeys} rowsPerPage={5} /> */}

                                <button className='mt-12 btn btn-primary' onClick={() => setSelectModalOpen(true)}>Add Question</button>
                            </>
                        }

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


            <Modal 
                isOpen={isSelectModalOpen} 
                closeModal={() => setSelectModalOpen(false)} 
                title={"Add A Question"} 
                content={
                    <>
                        Table of Questions
                    </>
                } 
                secondAction={handleSelect}
                secondActionTitle={"Add Question"}
            />

            <Modal 
                isOpen={isConfirmModalOpen} 
                closeModal={() => setConfirmModalOpen(false)} 
                title={"Are You Sure?"} 
                content={"Are you sure you want to select your own answers? You will loose these randomly generated selections."} 
                secondAction={handleConfirm}
                secondActionTitle={"Confirm"}
            />

            <ToastContainer position="top-center" autoClose={500} hideProgressBar />


        </div>
    )
}
