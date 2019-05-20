import React from "react";
import "./App.css";
import StudentBox from "./components/StudentBox";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <StudentBox />
      </div>
    );
  }
}

export default App;
