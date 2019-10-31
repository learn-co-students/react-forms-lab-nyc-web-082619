import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (event) => {
      this.setState({username: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
}

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin({username: this.state.username,password: this.state.password})
    }
  }

  render() {
    return (
      <form onSubmit={event=>this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event=>this.handleUsername(event)} id="username" value={this.state.username} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event=>this.handlePassword(event)} id="password" value={this.state.password} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;