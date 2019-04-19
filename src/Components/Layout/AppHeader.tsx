import React, { Component } from "react";
import "./AppHeader";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
    NavLink, Route, RouteComponentProps
  } from "react-router-dom";
interface IProps { 
}
interface IState { 
    selectedKeys: any[]
 }

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class AppHeader extends Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        
        this.state = {
            selectedKeys : ["home"]
        };
    }

    onNavClick(event: any){
        // this.props.routes[this.props.routes.length-1]
        console.log("props", this.props);
        console.log("match", this.context);
        console.log("nav clicked", this.state.selectedKeys);
        console.log(event);
        this.setState({selectedKeys : [event.key]});
    }

    render() {
        return (
            <div>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['home']}
                            selectedKeys={this.state.selectedKeys}
                            style={{ lineHeight: '64px' }}
                            onClick={ (e: any) =>this.onNavClick(e)}
                            
                        >
                            <Menu.Item key="home"><NavLink to="/" activeClassName="active">Home</NavLink></Menu.Item>
                            <Menu.Item key="details"><NavLink to="/details" activeClassName="active">Car Details</NavLink></Menu.Item>
                            <Menu.Item key="form"><NavLink to="/form" activeClassName="active">Purchase Form</NavLink></Menu.Item>
                            <Menu.Item key="help"><NavLink to="/help" activeClassName="active">Help</NavLink></Menu.Item>
                        </Menu>
                    </Header>
            </div>
        );

    }

}

export default AppHeader;