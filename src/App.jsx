import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who played the Iron Man character?",
      answers: [
        {
          text: "Robert Downey Jr.",
          correct: true,
        },
        {
          text: "Jon Favreau",
          correct: false,
        },
        {
          text: "Stan Lee",
          correct: false,
        },
        {
          text: "Paul  Battany",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the publisher of Marvel Comics?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "Stan Lee",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Captain Jack Sparrow in Pirates of the Caribbean Movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct:false,
        },
      ],
    },
    {
      id: 4,
      question: "Indian Best Documentry Movie Who win Oscar Awards in 2023?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "The Elephant Whisperers",
          correct:true,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "When was Facebook created?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "2004",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "when did netaji Subhash Chandra Bose born?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "23 January 1897",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who won the first gold medal in India after independence?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "Balbir Singh Sr",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who is inventor in Google?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "Sergey Brin and Larry Page",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who invented Microsoft?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "Bill Gates and Paul Allen",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "name of the actor who plays harry potter character?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who was the first Prime Minister of India?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "Jawaharlal Nehru",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who invented Computer?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "Charles Babbage",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "How many Cricket world cups does India have?",
      answers: [
        {
          text: "2",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Smallest state of India is?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "Goa",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Which organ purify our blood?",
      answers: [
        {
          text: "",
          correct: false,
        },
        {
          text: "Kidney",
          correct: true,
        },
        {
          text: "",
          correct: false,
        },
        {
          text: "",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        {id:1,amount:"₹ 500"},
        {id:2,amount:"₹ 1000"},
        {id:3,amount:"₹ 2000"},
        {id:4,amount:"₹ 5000"},
        {id:5,amount:"₹ 10000"},
        {id:6,amount:"₹ 20000"},
        {id:7,amount:"₹ 40000"},
        {id:8,amount:"₹ 80000"},
        {id:9,amount:"₹ 160000"},
        {id:10,amount:"₹ 320000"},
        {id:11,amount:"₹ 625000"},
        {id:12,amount:"₹ 1250000"},
        {id:13,amount:"₹ 2500000"},
        {id:14,amount:"₹ 5000000"},
        {id:15,amount:"₹ 10000000"},
      
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
