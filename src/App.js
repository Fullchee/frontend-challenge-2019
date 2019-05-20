import React from "react";
import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    const res = await fetch("https://www.hatchways.io/api/assessment/students");
    if (res.status !== 200) {
      console.error("Unable to reach API");
    }
    const { students } = await res.json();
    /*
city: "Fushë-Muhurr"
company: "Yadel"
email: "iorton0@imdb.com"
firstName: "Ingaberg"
grades: (8) ["78", "100", "92", "86", "89", "88", "91", "87"]
id: "1"
lastName: "Orton"
pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg"
skill: "Oracle"
    */
  }
  render() {
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }
}

export default App;
