import React from "react";
import ToggleButton from "./ToggleButton";
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
  constructor(props) {
    super(props);
    this.calcAverage = this.calcAverage.bind(this);
    this.showExtraInfo = this.showExtraInfo.bind(this);
    this.state = {
      showExtraInfo: false
    };
  }
  calcAverage() {
    const gradeSum = this.props.info.grades.reduce(
      (acc, curr) => acc + parseFloat(curr),
      0
    );
    return gradeSum / this.props.info.grades.length;
  }

  showExtraInfo() {
    if (this.state.showExtraInfo) {
      return (
        <section className="student-extra-info">
          <table className="grade-table">
            {this.props.info.grades.map((grade, i) => (
              <tr>
                <td>Test {i}:</td>
                <td>{grade}%</td>
              </tr>
            ))}
          </table>
        </section>
      );
    }
  }
  render() {
    return (
      <div>
        <img
          src={this.props.info.pic}
          alt={`${this.props.info.firstName} ${this.props.info.lastName}`}
        />
        <h2 className="student-name">
          {`${this.props.info.firstName} ${
            this.props.info.lastName
          }`.toUpperCase()}
        </h2>
        <section className="student-info">
          <p>Email: {this.props.info.email}</p>
          <p>Company: {this.props.info.company}</p>
          <p>Skill: {this.props.info.skill}</p>
          <p>Average: {this.calcAverage()}%</p>
        </section>

        <ToggleButton
          key={this.props.info.id}
          onClick={() =>
            this.setState({ showExtraInfo: !this.state.showExtraInfo })
          }
        />
        {this.showExtraInfo()}
      </div>
    );
  }
}
