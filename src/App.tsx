import React, { Component } from 'react';
import {  BrowserRouter,RouteComponentProps} from "react-router-dom";


import './App.css';
import { Layout, Menu } from 'antd';

import AppHeader from './Components/layout/app-header';
import AppSidebar from './Components/layout/app-sidebar';
import AppContent from './Components/layout/app-content';


interface IProps  {
};
interface IState  {};

//https://create-react-app.dev/docs/updating-to-new-releases/
//When you run npx create-react-app my-app it automatically installs the latest version of Create React App. 
//Type '{}' is missing the following properties from type 'Readonly<IProps & RouteComponentProps<{}, StaticContext, any>>': history, location, matchts(2739)
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
          <AppHeader />
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
