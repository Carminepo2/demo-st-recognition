import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";

function Game({ setIsGameOn }) {
  const [isLoading, setIsLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);

  const questionList = [
    {
      question: "Select the correct Part Number for the Washing Machine",
      answers: ["IIS2MDC", "ESDCAN01-2BLY", "ST33G1M0A", "SPC5-UDESKT-SW", "AIS328DQ"],
      correctQuestion: "IIS2MDC",
    },
    {
      question: "Select the correct Part Number for the Washing Machine",
      answers: ["ESDCAN05-2BWY", "L5965", "IIS2DH", "ESDCAN03-2BWY", "L9616"],
      correctQuestion: "IIS2DH",
    },
  ];

  const handlePresentation = () => {
    if (questionNumber === 0) {
      setRight(true);
    } else {
      setWrong(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <div className="w-screen flex justify-center items-center">Loading</div>;
  if (questionNumber === 2) return <Feedback />;
  return (
    <>
      <div className="w-screen">
        <h3 className="font-bold my-10 px-6 text-center">{questionList[questionNumber].question}</h3>

        <ul className="space-y-3 px-6" onClick={handlePresentation}>
          <li className={`font-bold py-2 ${right ? "bg-green-100" : "bg-gray-100"} px-6`}>
            {questionList[questionNumber].answers[0]}
          </li>
          <li className={`font-bold py-2 ${wrong ? "bg-red-100" : "bg-gray-100"} px-6`}>
            {questionList[questionNumber].answers[1]}
          </li>
          <li className="font-bold py-2 bg-gray-100 px-6">{questionList[questionNumber].answers[2]}</li>
          <li className="font-bold py-2 bg-gray-100 px-6">{questionList[questionNumber].answers[3]}</li>
          <li className="font-bold py-2 bg-gray-100 px-6">{questionList[questionNumber].answers[4]}</li>
        </ul>
        {wrong && (
          <p className="px-6 text-xs mt-5 -mb-2">
            *correct answer: <strong>IIS2DH</strong> <br /> <strong>L5965</strong> is the Part Number of{" "}
            <strong>24 GHz Radar</strong>{" "}
          </p>
        )}
        <div className="w-screen flex justify-center mt-10">
          <button
            onClick={() => {
              setRight(false);
              setQuestionNumber((prev) => prev + 1);
            }}
            className="uppercase rounded-full bg-[#085ECA] py-2 px-5 text-white"
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default Game;
