import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn">
          {showInfo ? (
            <AiOutlineMinusCircle onClick={() => setShowInfo(!showInfo)} />
          ) : (
            <AiOutlinePlusCircle onClick={() => setShowInfo(!showInfo)} />
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
