import React from "react";

export default class Student extends React.Component {
  /**
   * @returns {Number} - average of grades given in props
   */
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      text: "+"
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    event.preventDefault();
    this.props.onClick();
    this.setState({
      on: !this.state.on,
      text: !this.state.on ? "-" : "+"
    });
  }

  render() {
    return <button onClick={this.onClick}>{this.state.text}</button>;
  }
}
