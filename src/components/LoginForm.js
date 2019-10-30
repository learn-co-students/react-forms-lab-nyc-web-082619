import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName : "",
      password : ""
    };
  }

  submithandler = (e) => {
    e.preventDefault();
    if(this.state.userName.length > 0 && this.state.password.length > 0)
      this.props.handleLogin(this.state.userName,this.state.password);
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.submithandler}>
        <div>
          <label>
            Username
            <input 
              onChange={(e)=>this.setState({userName: e.target.value})} 
              id="username" name="username" type="text" 
              value={this.state.userName}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              onChange={(e)=>this.setState({password: e.target.value})} 
              id="password" name="password" type="password" 
              value={this.state.password}
            />
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
