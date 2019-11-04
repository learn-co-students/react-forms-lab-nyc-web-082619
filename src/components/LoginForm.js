import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: ""
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    if(this.state.userName.length > 0 && this.state.password.length > 0)
      this.props.handleLogin(this.state.userName,this.state.password);
  }	  	  

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input onChange={(event)=>{this.setState({userName: event.target.value})}} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(event) =>{this.setState({password: event.target.value})}} id="password" name="password" type="password" value={this.state.password}/>
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
