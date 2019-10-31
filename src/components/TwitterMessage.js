import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleTyping = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Characters remaining: {280-this.state.message.length}</p>
        <strong>Your message: </strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event=>this.handleTyping(event)}/>
      </div>
    );
  }
}

export default TwitterMessage;
