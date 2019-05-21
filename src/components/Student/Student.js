import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import "./Student.scss";

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
            <tbody>
              {this.props.info.grades.map((grade, i) => (
                <tr key={i}>
                  <td>Test {i + 1}:</td>
                  <td>{grade}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <section className="tag-section">
            {this.props.info.tags.map(tag => {
              return <span className="tag">{tag}</span>;
            })}
            <TextInput
              onEnter={this.props.addTag(parseInt(this.props.info.id, 10) - 1)}
            />
          </section>
        </section>
      );
    }
  }
  render() {
    return (
      <div>
        <div className="student-thumb">
          <img
            src={this.props.info.pic}
            alt={`${this.props.info.firstName} ${this.props.info.lastName}`}
          />
        </div>
        <div className="student-content">
          <ToggleButton
            key={this.props.info.id}
            onClick={() =>
              this.setState({ showExtraInfo: !this.state.showExtraInfo })
            }
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
          {this.showExtraInfo()}
        </div>
      </div>
    );
  }
}

Student.propTypes = {
  info: PropTypes.shape({
    city: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    grades: PropTypes.arrayOf(PropTypes.string)
  })
};
