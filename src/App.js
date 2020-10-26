import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import CreateQuiz from "./components/CreateQuiz";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/createQuiz" component={CreateQuiz}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
