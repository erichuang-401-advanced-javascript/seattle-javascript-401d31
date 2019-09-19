import React from "react";
import Form from "./form/form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "placeholder",
      count: 0
    };
  }

  handleNameUpdate = newName => {
    this.setState(prevState => ({
      name: newName,
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
          <Form
            currentState={this.state}
            handleUpdates={this.handleNameUpdate}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
