import React from "react";
import PropTypes from "prop-types";
import "./ToggleButton.scss";
import plusImg from "../../img/plus.jpg";
import minusImg from "../../img/minus.jpg";

export default class ToggleButton extends React.Component {
  /**
   * @returns {Number} - average of grades given in props
   */
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      imgSrc: plusImg
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    event.preventDefault();
    this.props.onClick();
    this.setState({
      on: !this.state.on,
      imgSrc: !this.state.on ? minusImg : plusImg
    });
  }

  render() {
    return (
      <input
        type="image"
        src={this.state.imgSrc}
        className="toggle-button"
        onClick={this.onClick}
        alt="Click to toggle showing extra student info"
      />
    );
  }
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
