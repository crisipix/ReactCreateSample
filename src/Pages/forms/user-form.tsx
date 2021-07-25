import React, {  useState } from "react";
import Button from 'antd/lib/button';
import './user-form.css';
import {
  NavLink, Route, RouteComponentProps
} from "react-router-dom";

import {observer,inject} from "mobx-react";
import {useStores} from '../../hooks/useStores';
import Wrapper from "../../Components/layout/styled";
interface IProps{
  
}
// interface IState{
//   Name: string
// }


//https://www.nealbuerger.com/2018/11/11/getting-started-with-mobx-5-and-typescript-3-react-16-6/
 
const UserForm : React.FC<IProps & RouteComponentProps<{}>> = props => {
    const [Name, SetName] = useState<string>("Chris W");
    const {carStore } = useStores();  
   
      //  fat arrow functions to wrap the callback in 
      //  So that you can pass the event and access the state.
     const handleChange = (event: any) => {
        console.log(event);
        SetName(event.target.value);
      }
    
      const  handleSubmit = (event: any) => {
        console.log("store", carStore.Cars);
        console.log("store", carStore.filter);
        
        alert('A name was submitted: ' + Name); //error here
        // event.preventDefault();
      }

      const handleAddCar = (event : any)=>{
    
      console.log("event value ", Name);
      carStore.addCar(Name);
      console.log("store cars", carStore.Cars);
      console.log("store count", carStore.carCount);
      }

      const handleRemoveCar = (event : any) => {
       
        console.log(event.target, "removing");
        console.log(event.target.textContent, "removing value ");
        carStore.removeCar(event.target.textContent);

      }
      // componentDidMount() {
      //   console.log("mounted");
      //     console.log("props",this.props);
      //     console.log("match",this.props.match);
      //     console.log("match",this.props.match.params);
      //     const {params} = this.props.match;
          
      //     }
          
       
     

        return(
          <Wrapper>
            <div className="userform">
            USER FORM
            <p>Hello {Name} this is react sample</p>
            <input className="name-input" value={Name} onChange={handleChange}></input>

             {/*
                 fat arrow functions to wrap the callback in 
                 So that you can pass the event and access the state.
                 creating the arrow syntax in the render isn't good because
                 a new copy is created with each render
             */}
             {/* <Button type="primary" onClick={(e: any) => this.handleSubmit(e)}>Button</Button> */}
             <Button type="primary" onClick={handleSubmit}>Button</Button>
             <Button type="primary" onClick={handleAddCar}>Add Car</Button>
             <ul>{carStore.Cars.map((c)=> <li onClick={handleRemoveCar}>{c}</li>)}</ul>
        </div>
          </Wrapper>
        


    );
}

export default observer(UserForm)