import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

import "./AppContent";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Home from "../../Pages/Home/Home";
import CarDetails from "../../Pages/Tables/CarDetails";
import UserForm from "../../Pages/Forms/UserForm";


interface IProps {}
interface IState {}

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AppContent extends Component<IProps, IState> {
  constructor(prop: any) {
    super(prop);
  }
  render() {
    return (
      <div>
        <Content className="app-content" >
          Content
         
            <Switch>
              <Route exact path='/' component={Home}/>
              {/* both /roster and /roster/:number begin with /roster */}
              <Route path='/details' component={CarDetails} />
              <Route path='/form' component={UserForm} />
            </Switch>
            
        </Content>
      </div>
    );
  }
}

export default AppContent;
