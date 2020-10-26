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

  // authentication
  const user = auth.getCurrentUser();
  if (!user) return <Redirect to="/login" />;

  // authorization
  if (user.role !== "teacher") return <Redirect to="/" />;

  const handleSubmit = () => {};
  const handleCancel = () => {
    window.location = "/";
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
        </form>

        <button onClick={handleCancel}>Cancel</button>
      </div>
    </React.Fragment>
  );
};

export default CreateQuiz;
