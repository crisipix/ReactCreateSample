import React, {  Component } from "react";
import Button from 'antd/lib/button';
import './UserForm.css';
import {
  NavLink, Route, RouteComponentProps
} from "react-router-dom";
interface IProps{

}
interface IState{
  Name: string
}

class UserForm extends Component<IProps & RouteComponentProps<{}>, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            Name: "Chris W."
        };
    }


      //  fat arrow functions to wrap the callback in 
      //  So that you can pass the event and access the state.
     handleChange = (event: any) => {
        console.log(event);
        this.setState({ Name: event.target.value });
      }
    
      handleSubmit = (event: any) => {
        alert('A name was submitted: ' + this.state.Name); //error here
        // event.preventDefault();
      }

      componentDidMount() {
        console.log("mounted");
          console.log("props",this.props);
          console.log("match",this.props.match);
          console.log("match",this.props.match.params);
          const {params} = this.props.match;
          
          }
          
       
    render(){
        return(
        <div className="userform">
            USER FORM
            <p>Hello {this.state.Name} this is react sample</p>
            <input className="name-input" value={this.state.Name} onChange={this.handleChange}></input>

             {/*
                 fat arrow functions to wrap the callback in 
                 So that you can pass the event and access the state.
                 creating the arrow syntax in the render isn't good because
                 a new copy is created with each render
             */}
             {/* <Button type="primary" onClick={(e: any) => this.handleSubmit(e)}>Button</Button> */}
             <Button type="primary" onClick={this.handleSubmit}>Button</Button>
        </div>


    )};
}

export default UserForm