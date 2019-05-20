import React from "react";
import "./App.css";
import StudentBox from "./components/StudentBox/StudentBox";

class App extends React.Component {
  render() {
    return (
      <div className="student-box">
        <StudentBox />
      </div>
    );
  }
}

export default App;
