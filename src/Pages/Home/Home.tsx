import React, { Component } from "react";
import "./Home.css";
import logo from '../../logo.svg';

interface IProps{}
interface IState{}

class Home extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
                HOME
            </p>
            <a
              className="Home-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
  
         </header>
            );

    };
}

export default Home