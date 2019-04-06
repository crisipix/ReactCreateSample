import React, { Component } from 'react';
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";


import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import AppHeader from './Components/Layout/AppHeader';
import AppSidebar from './Components/Layout/AppSidebar';
import AppContent from './Components/Layout/AppContent';


type IProps = {};
type IState = {};

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { };
  }

  render() {
    
    return (
      <div className="App">
      <BrowserRouter>
        <Layout>
          <AppHeader/>
          <Layout>
            <AppSidebar/>
            <Layout style={{ padding: '0 10px 10px' }}>
            <AppContent/>
            </Layout>
          </Layout>
        </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
