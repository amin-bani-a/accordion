import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn">
          {isActive ? (
            <AiOutlineMinusCircle onClick={() => toggleQuestion(id)} />
          ) : (
            <AiOutlinePlusCircle onClick={() => toggleQuestion(id)} />
          )}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
