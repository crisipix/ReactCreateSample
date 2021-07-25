import React, { Component } from "react";
import "./home.css";
import logo from "../../logo.svg";
import Wrapper from "../../Components/layout/styled";

interface IProps {}
interface IState {}

class Home extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>HOME</p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Wrapper>
    );
  }
}

export default Home;
