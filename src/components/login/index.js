import React, { Component } from "react";
import { connect } from "react-redux";
import { loginData } from "../../action";

class Login extends Component {
  state = {
    formControls: {
      email: {
        value: "",
      },
      password: {
        value: "",
      },
    },
  };

  componentDidMount() {
    this.props.loginData();
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.formControls.email.value;
    const password = this.state.formControls.password.value;

    // console.log("formValue", this.state.formControls.email.value);
    console.log(this.props.login.username);

    if (
      email === this.props.login.username &&
      password === this.props.login.password
    ) {
      alert("Login Successful");
      this.props.history.push("/dashboard");
    } else alert("please check credential");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="on">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={this.state.formControls.email.value}
          onChange={this.changeHandler}
          placeholder="Enter Email"
          autoComplete="off"
          required
        />
        <label htmlFor="name">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={this.state.formControls.password.value}
          onChange={this.changeHandler}
          placeholder="Enter Password"
          autoComplete="off"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login.login,
});

export default connect(mapStateToProps, { loginData })(Login);
