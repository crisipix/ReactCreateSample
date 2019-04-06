import React, {  Component } from "react";
import Button from 'antd/lib/button';
import './UserForm.css';

interface IProps{}
interface IState{
  Name: string
}

class UserForm extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            Name: "Chris"
        };
    }
    public handleChange(event: any) {
        console.log(event);
        this.setState({ Name: event.target.value });
      }
    
      handleSubmit(event: any) {
        alert('A name was submitted: ' + this.state.Name); //error here
        // event.preventDefault();
      }

    render(){
        return(
        <div>
            USER FORM
            <p>Hello {this.state.Name} this is react sample</p>
            <input className="name-input" value={this.state.Name} onChange={e => this.handleChange(e)}></input>

             {/*
                 fat arrow functions to wrap the callback in 
                 So that you can pass the event and access the state.
             */}
             <Button type="primary" onClick={(e: any) => this.handleSubmit(e)}>Button</Button>
        </div>


    )};
}

export default UserForm