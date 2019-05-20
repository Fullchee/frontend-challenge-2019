import React from "react";
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

export default class Student extends React.Component {
  /**
   * @returns {Number} - average of grades given in props
   */
  calcAverage() {
    const gradeSum = this.props.info.grades.reduce(
      (acc, curr) => acc + parseFloat(curr),
      0
    );
    return gradeSum / this.props.info.grades.length;
  }
  render() {
    return (
      <div>
        <img
          src={this.props.info.pic}
          alt={`${this.props.info.firstName} ${this.props.info.lastName}`}
        />
        <p className="student-name">{`${this.props.info.firstName} ${
          this.props.info.lastName
        }`}</p>
        <p>Email: {this.props.info.email}</p>
        <p>Company: {this.props.info.company}</p>
        <p>Skill: {this.props.info.skill}</p>
        <p>Average: {this.calcAverage()}%</p>
      </div>
    );
  }
}
