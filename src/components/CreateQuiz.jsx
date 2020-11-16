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

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: [{ option: "" }, { option: "" }, { option: "" }, { option: "" }],
      answer: "",
    },
  ]);

  // authentication
  const user = auth.getCurrentUser();
  if (!user) return <Redirect to="/login" />;

  // authorization
  if (user.role !== "teacher") return <Redirect to="/" />;

  const handleAddQuestion = () => {
    const question = {
      question: "",
      options: [{ option: "" }, { option: "" }, { option: "" }, { option: "" }],
      answer: "",
    };
    setQuestions((prevQues) => {
      return [...prevQues, question];
    });
  };

  const handleCancel = () => {
    window.location = "/";
  };

  const handleChange = (e) => {
    setQuizDetails({
      ...quizDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuestionChange = (e) => {
    const index = e.target.name;
    const value = e.target.value;

    setQuestions((prevQues) => {
      const currQuestionObj = prevQues[index];
      currQuestionObj.question = value;
      const newQuestions = [...questions];
      newQuestions[index] = currQuestionObj;
      return newQuestions;
    });
  };

  const handleOptionChange = (e) => {
    const [qIndex, oIndex] = e.target.name.split("-");
    const value = e.target.value;

    setQuestions((prevQues) => {
      const currOptionsObj = prevQues[qIndex]["options"][oIndex];
      currOptionsObj.option = value;
      const newQuestions = [...questions];
      newQuestions[qIndex]["options"][oIndex] = currOptionsObj;
      return newQuestions;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quizDetails);
    console.log(questions);
  };

  return (
    <React.Fragment>
      <Navbar user={user} />
      <div className="createQuiz">
        <div className="title">Create a new Quiz</div>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="subject" className="subjectLabel">
            Subject
          </label>
          <br />
          <input
            type="text"
            name="subject"
            className="subjectInput"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="description" className="descLabel">
            Description
          </label>
          <br />
          <input
            type="text"
            name="description"
            className="descInput"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="start" className="startLabel">
            Start Date and Time
          </label>
          <br />
          <input
            type="datetime-local"
            name="startDateTime"
            className="startInput"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="end" className="endLabel">
            End Date and Time
          </label>
          <br />
          <input
            type="datetime-local"
            name="endDateTime"
            className="endInput"
            onChange={handleChange}
          />
          <br />

          {questions.map((questionObj, index) => (
            <div key={index}>
              <label className="questionLabel">Question {index + 1}</label>
              <br />
              <textarea
                name={index}
                className="questionInput"
                cols="30"
                rows="5"
                value={questions[index].question}
                onChange={handleQuestionChange}
              ></textarea>
              <br />

              <input
                type="text"
                name={`${index}-0`}
                className="option"
                value={questions[index].options[0].option}
                onChange={handleOptionChange}
              />
              <input
                type="text"
                name={`${index}-1`}
                className="option"
                value={questions[index].options[1].option}
                onChange={handleOptionChange}
              />
              <input
                type="text"
                name={`${index}-2`}
                className="option"
                value={questions[index].options[2].option}
                onChange={handleOptionChange}
              />
              <input
                type="text"
                name={`${index}-3`}
                className="option"
                value={questions[index].options[3].option}
                onChange={handleOptionChange}
              />
            </div>
          ))}
        </form>

        <button onClick={handleAddQuestion}>Add Question</button>
        <br />
        <button onClick={handleCancel}>Cancel</button>
        <br />
        <button onClick={handleSubmit}>Create</button>
      </div>
    </React.Fragment>
  );
};

export default CreateQuiz;
