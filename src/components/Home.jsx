import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "./common/Navbar";
import StudentHome from "./StudentHome";
import TeacherHome from "./TeacherHome";
import auth from "../services/authService";

const Home = () => {
  // authentication
  const user = auth.getCurrentUser();
  if (!user) return <Redirect to="/login" />;

  return (
    <React.Fragment>
      <Navbar user={user} />
      {user.role === "student" && <StudentHome user={user} />}
      {user.role === "teacher" && <TeacherHome user={user} />}
    </React.Fragment>
  );
};

export default Home;
