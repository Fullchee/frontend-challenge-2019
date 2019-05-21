import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: "",
      tagFilter: ""
    };

    this.searchNameChange = this.searchNameChange.bind(this);
    this.searchTagChange = this.searchTagChange.bind(this);
  }

  searchNameChange(event) {
    this.props.handleFilterChange({
      nameFilter: event.target.value,
      tagFilter: this.state.tagFilter
    });
    this.setState({ nameFilter: event.target.value });
  }
  searchTagChange(event) {
    this.props.handleFilterChange({
      nameFilter: this.state.nameFilter,
      tagFilter: event.target.value
    });
    this.setState({ tagFilter: event.target.value });
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.searchNameChange}
            placeholder="Search by name"
            className="filter"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.searchTagChange}
            placeholder="Search by tags"
            className="filter"
          />
        </div>
      </div>
    );
  }
}
Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired
};
