import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./common/Navbar";
import auth from "../services/authService";
import "./styles/createQuiz.css";

const CreateQuiz = () => {
  const [quizDetails, setQuizDetails] = useState({
    subject: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    creator: "",
    questions: [],
    enrolledStudents: [],
  });
  const [questionCount, setQuestionCount] = useState([1]);

  // authentication
  const user = auth.getCurrentUser();
  if (!user) return <Redirect to="/login" />;

  // authorization
  if (user.role !== "teacher") return <Redirect to="/" />;

  const handleSubmit = () => {};
  const handleCancel = () => {
    window.location = "/";
  };
  const handleAdd = () => {
    setQuestionCount((prevCount) => {
      return [...prevCount, prevCount[prevCount.length - 1] + 1];
    });
  };

  return (
    <React.Fragment>
      <Navbar user={user} />
      <div className="createQuiz">
        <div className="title">Create a new Quiz</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subject" className="subjectLabel">
            Subject
          </label>
          <input type="text" className="subjectInput" />
          <label htmlFor="description" className="descLabel">
            Description
          </label>
          <input type="text" className="descInput" />
          <label htmlFor="start" className="startLabel">
            Start Date and Time
          </label>
          <input type="datetime-local" className="startInput" />
          <label htmlFor="end" className="endLabel">
            End Date and Time
          </label>
          <input type="datetime-local" className="endInput" />

          {questionCount.map((count) => (
            <div key={count}>
              <label htmlFor="questions">Question {count}</label>
              <textarea
                name="question"
                className="question"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          ))}
        </form>

        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleAdd}>Add Question</button>
      </div>
    </React.Fragment>
  );
};

export default CreateQuiz;
