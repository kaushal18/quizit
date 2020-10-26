import React from "react";

const TeacherHome = ({ user }) => {
  const handleCreateQuiz = () => {
    window.location = "/createQuiz";
  };

  return (
    <React.Fragment>
      <h1 style={{ marginTop: "3%" }}>{user.name}</h1>
      <button onClick={handleCreateQuiz}>Create quiz</button>
    </React.Fragment>
  );
};

export default TeacherHome;
