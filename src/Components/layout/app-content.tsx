import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";

import "./app-content";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Home from "../../Pages/home/home";
import CarDetails from "../../Pages/tables/car-details";
import UserForm from "../../Pages/forms/user-form";
import Help from "../../Pages/help/help";

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
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          backgroundColor: "white"
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          {/* both /roster and /roster/:number begin with /roster */}
          <Route exact path="/details" component={CarDetails} />
          <Route exact path="/details/:model" component={CarDetails} />
          <Route exact path="/form" component={UserForm} />
          <Route exact path="/help" component={Help} />
        </Switch>
      </Content>
    );
  }
}

export default AppContent;
