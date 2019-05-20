import React from "react";
import Student from "./Student";

export default class StudentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      students: [],
      allStudents: []
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  async componentDidMount() {
    const res = await fetch("https://www.hatchways.io/api/assessment/students");
    if (res.status !== 200) {
      console.error("Unable to reach API");
    }
    const { students } = await res.json();
    this.setState({ students: students, allStudents: students });
  }

  handleFilterChange(event) {
    this.setState({
      value: event.target.value,
      students: this.state.allStudents.filter(student => {
        return (
          student.firstName
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          student.lastName
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
      })
    });
  }
  render() {
    return (
      <div id="student-box">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleFilterChange}
          placeholder="Search by name"
        />
        {this.state.students.map(student => (
          <Student key={student.id} info={student} />
        ))}
      </div>
    );
  }
}
// TODO: react prop types
