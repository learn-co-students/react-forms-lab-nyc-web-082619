import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars : this.props.maxChars,
      inputCharacters : ""
    };
  }

  handleChars = (e) => {
    this.setState({
      maxChars: this.state.maxChars - 1,
      inputCharacters: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Available characters: {this.state.maxChars}</strong>
        <input onChange = {this.handleChars} 
        type="text" name="message" id="message" 
        value={this.state.inputCharacters}/>
      </div>
    );
  }
}

export default TwitterMessage;
