import "../App.css";
import React, { useState } from "react";

function Quiz() {
  const [message, setMessage] = useState("");
  const quiz = [
    {
      question: "What is a hypotenuse?",
      options: [
        "A triangle with 4 sides",
        "Total length of all sides",
        "Longest side of a triangle",
      ],
      answer: "Longest side of a triangle",
    },
    {
      question: "How many angles are present in a triangle?",
      options: [1, 5, 3, 0],
      answer: "3",
    },
    {
      question: "How many sides does a triangle have?",
      options: [2, 3, 6, 0],
      answer: "3",
    },
    {
      question: "Which triangle has one angle greater than 90 degrees.",
      options: ["equilateral", "obtuse", "acute", "isosceles"],
      answer: "obtuse",
    },
    {
      question:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: ["45", "60", "90", "30"],
      answer: "90",
    },
    {
      question: "A triangle can have",
      options: ["one right angle", "two right angles", "three right angles"],
      answer: "one right angle",
    },
    {
      question: "The perimeter of scalene triangle with sides a, b, c is",
      options: ["a+b+c", "2a", "3b", "2c"],
      answer: "a+b+c",
    },
    {
      question: "Which of the following triangles are always similar?",
      options: ["Equilateral", "Isosceles"],
      answer: "Equilateral",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const finalScore = calculateScore(elements);
    setMessage("Your Score is: " + finalScore + "/" + quiz.length);
  };

  const calculateScore = (elements) => {
    let score = 0;
    for (let i = 0; i < quiz.length; i++) {
      if (elements["question" + i].value === quiz[i].answer) {
        score++;
      }
    }
    return score;
  };

  return (
    <div className="content">
      <h1>Quiz on triangles</h1>
      <p className="subtitle">For each correct answer you will get 1 point</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        {quiz.map((q, index) => {
          return (
            <div className="input-container" key={index}>
              <p>{q.question}</p>
              {q.options.map((option, subIndex) => (
                <label key={subIndex}>
                  <input
                    type="radio"
                    name={"question" + index}
                    value={option}
                  />
                  {option}
                </label>
              ))}
            </div>
          );
        })}
        <input className="link link-primary" type="submit" value="Submit" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}

export default Quiz;
