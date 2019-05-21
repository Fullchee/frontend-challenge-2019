import React from "react";
import Student from "../Student/Student";
import Filter from "../Filter/Filter";
import "./StudentBox.scss";

export default class StudentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      allStudents: []
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.addTag = this.addTag.bind(this);
  }
  async componentDidMount() {
    const res = await fetch("https://www.hatchways.io/api/assessment/students");
    if (res.status !== 200) {
      console.error("Unable to reach API");
    }
    const { students } = await res.json();
    const studentsWithTags = students.map(student => {
      return { ...student, tags: [] };
    });
    this.setState({
      students: studentsWithTags,
      allStudents: studentsWithTags
    });
  }

  handleFilterChange({ nameFilter, tagFilter }) {
    let nameFiltered;
    if (nameFilter === "") {
      nameFiltered = this.state.allStudents;
    } else {
      nameFiltered = this.state.allStudents.filter(student => {
        return (
          student.firstName.toLowerCase() + student.lastName.toLowerCase()
        ).includes(nameFilter.toLowerCase());
      });
    }
    if (tagFilter === "") {
      this.setState({
        students: nameFiltered
      });
    } else {
      this.setState({
        students: nameFiltered.filter(student => {
          return student.tags.some(tag => tag.includes(tagFilter));
        })
      });
    }
  }

  addTag(index) {
    // prevent duplicate tags
    return name => {
      this.setState({
        ...this.state.allStudents,
        [index]: {
          tags: this.state.allStudents[index].tags.push(name)
        }
      });
    };
  }

  render() {
    return (
      <div id="student-box">
        <section className="header">
          <Filter handleFilterChange={this.handleFilterChange} />
        </section>
        <section className="content">
          {this.state.students.map(student => (
            <Student key={student.id} info={student} addTag={this.addTag} />
          ))}
        </section>
      </div>
    );
  }
}
