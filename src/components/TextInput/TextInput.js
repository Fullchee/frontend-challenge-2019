import React from "react";
import PropTypes from "prop-types";
import "./TextInput.scss";

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  onKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.props.onEnter(event.target.value);
      this.setState({
        value: ""
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          placeholder="Add a tag"
          className="tag-input"
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  onEnter: PropTypes.func.isRequired
};
