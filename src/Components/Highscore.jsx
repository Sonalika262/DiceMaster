import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Highscore = ({ currentScore }) => {
  // State for storing the high score
  const [highscore, setHighscore] = useState(0);

  // Load the high score from localStorage on component mount
  useEffect(() => {
    const storedHighscore = localStorage.getItem("highscore");
    if (storedHighscore) {
      setHighscore(parseInt(storedHighscore, 10));
    }                                                
  }, []);

  // Update highscore in localStorage if the current score is higher
  useEffect(() => {
    if (currentScore > highscore) {
      setHighscore(currentScore);
      localStorage.setItem("highscore", currentScore); // Store in localStorage
    }
  }, [currentScore, highscore]);

  return (
    <div>
      <ScoreContainer>
        <h1>{highscore}</h1>
        <p>High Score</p>
      </ScoreContainer>
    </div>
  );
};

export default Highscore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
