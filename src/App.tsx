import React, { Component } from 'react';
import {  BrowserRouter,RouteComponentProps} from "react-router-dom";


import './App.css';
import { Layout, Menu } from 'antd';

import AppHeader from './Components/Layout/AppHeader';
import AppSidebar from './Components/Layout/AppSidebar';
import AppContent from './Components/Layout/AppContent';


interface IProps  {
};
interface IState  {};


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
