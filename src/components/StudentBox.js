import React from "react";
import Student from "./Student";

export default class StudentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }
  async componentDidMount() {
    const res = await fetch("https://www.hatchways.io/api/assessment/students");
    if (res.status !== 200) {
      console.error("Unable to reach API");
    }
    const { students } = await res.json();
    this.setState({ students: students });
  }
  render() {
    return (
      <div>
        {this.state.students.map(student => (
          <Student key={student.id} info={student} />
        ))}
      </div>
    );
  }
}
