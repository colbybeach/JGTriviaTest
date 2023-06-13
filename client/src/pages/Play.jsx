import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicButton from '../components/Buttons/BasicButton';
import Question from '../components/QuestionForm/Question';
import BasicContainer from '../components/Containers/BasicContainer';

export default function Play() {

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form submission logic here

        setSubmitted(true);


        //Check to make sure we are actually getting the values.
        // alert(question1Value + question1Check.toString() + question2Value + question3Value + question4Value);

        //Success toast
        toast.success('Answers Submitted!');
    };


    //State Values
    const [submitted, setSubmitted] = useState(false);
    const [question1Value, setQuestion1Value] = useState("");
    const [question1Check, setQuestion1Check] = useState(false);
    const [question2Value, setQuestion2Value] = useState("");
    const [question2Check, setQuestion2Check] = useState(false);
    const [question3Value, setQuestion3Value] = useState("");
    const [question3Check, setQuestion3Check] = useState(false);
    const [question4Value, setQuestion4Value] = useState("");
    const [question4Check, setQuestion4Check] = useState(false);

    return (

        <BasicContainer title={"Today's Questions"} content={

            <>
            

            <Question 
                text={"Question 1"} 
                id={"question1"} 
                disabled={submitted}
                textValue={question1Value}
                onTextChange={e => setQuestion1Value(e.target.value)}
                onCheckChange={e => setQuestion1Check(e.target.checked)}
                checked={question1Check}
            />
            <Question 
                text={"Question 2"} 
                id={"question2"} 
                disabled={submitted}
                textValue={question2Value}
                onTextChange={e => setQuestion2Value(e.target.value)}
                onCheckChange={e => setQuestion2Check(e.target.checked)}
                checked={question2Check}
            />
            <Question 
                text={"Question 3"} 
                id={"question3"} 
                disabled={submitted}
                textValue={question3Value}
                onTextChange={e => setQuestion3Value(e.target.value)}
                onCheckChange={e => setQuestion3Check(e.target.checked)}
                checked={question3Check}
            />
            <Question 
                text={"Question 4"} 
                id={"question4"} 
                disabled={submitted}
                textValue={question4Value}
                onTextChange={e => setQuestion4Value(e.target.value)}
                onCheckChange={e => setQuestion4Check(e.target.checked)}
                checked={question4Check}
            />

            <button 
                className="btn btn-primary"
                onClick={handleSubmit}
                type='submit'
            >
                Submit
            </button>


            <ToastContainer position="top-center" autoClose={500} hideProgressBar />
            
            </>
         }/>    
    );
}
