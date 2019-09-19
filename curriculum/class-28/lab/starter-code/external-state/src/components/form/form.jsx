import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    };
  }

  nameOnChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.handleUpdates(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.nameOnChange}
        />
        <button type="submit">Submit Changes</button>
      </form>
    );
  }
}

export default Form;
