import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars : this.props.maxChars,
      inputCharacters : ""
    };
  }

  handleChange = (event) => {
    this.setState({
      maxChars: this.state.maxChars - 1,
      inputCharacters: event.target.value
    })
  }	  

  render() {
    return (
      <div>
        <strong>Characters remaining: {this.state.maxChars}</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.inputCharacters} />
      </div>
    );
  }
}

export default TwitterMessage;
