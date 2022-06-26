import React from "react";
import { useNavigate } from "react-router-dom";
import './Gameover.css'

export default function Gameover(props) {
  const navigate = useNavigate();
  const { score, setScore, setCount,  setError } = props;

  function restartGame() {
    setCount(0);
    setScore(0);
    setError("");
  }
  return (
    <div className="Over">
      <strong>Game Over</strong>
      <p className="score">
        <i>Your Score:</i> {score}
      </p>

      <button
        type="button"
        className="button-over"
        onClick={(e) => {
          e.preventDefault();
          navigate("/Api");
          restartGame();
        }}
      >
        Play again
      </button>
      <button className="button-home" onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
