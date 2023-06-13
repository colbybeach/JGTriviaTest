import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Play() {

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form submission logic here

        setSubmitted(true);
        // Show success toast
        toast.success('Answers Submitted!');
    };

    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Questions</h2>

            <div className="mb-4">
                <label htmlFor="question1" className="block font-semibold mb-2">
                    Question 1
                </label>
                <input
                    type="text"
                    id="question1"
                    name="question1"
                    disabled={submitted}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="question2" className="block font-semibold mb-2">
                    Question 2
                </label>
                <input
                    type="text"
                    id="question2"
                    name="question2"
                    disabled={submitted}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="question3" className="block font-semibold mb-2">
                    Question 3
                </label>
                <input
                    type="text"
                    id="question3"
                    name="question3"
                    disabled={submitted}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="question4" className="block font-semibold mb-2">
                    Question 4
                </label>
                <input
                    type="text"
                    id="question4"
                    name="question4"
                    disabled={submitted}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                onClick={handleSubmit}
           >
                Submit
            </button>

            <ToastContainer position="top-center" autoClose={500} hideProgressBar />

        </div>
    );
}
