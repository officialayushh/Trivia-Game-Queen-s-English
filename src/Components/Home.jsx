import React from "react";
import {  useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
      <h1 className="mainHead">Welcome to this Amazing Game</h1>
    <div className="main">
      <h1 className="heading">Trivia Game</h1>
      <h3>A fun learning Game</h3>
      <h4>Answer the questions correctly and score points</h4>
      <ul className="list">
        Rules:
        <li>
          Submit your answer and score 10 points for every correct answers
        </li>
        <li>There is a penalty of 5 points for wrong answers</li>
        <li>
          Focus on spelling as you will also get penalized for wrong spellings
        </li>
      </ul>
      <button
        className="home-button"
        onClick={() => {
          navigate("/Api");
        }}
      >
        Start Button
      </button>
    </div>
    </>
  );
}
