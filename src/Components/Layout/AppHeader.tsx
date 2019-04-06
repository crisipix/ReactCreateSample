import React, { Component } from "react";
import "./AppHeader";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
    NavLink
  } from "react-router-dom";
interface IProps { }
interface IState { }

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class AppHeader extends Component<IProps, IState>{
    constructor(prop: any) {
        super(prop);

    }
    render() {
        return (
            <div>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                       
                            <Menu.Item key="1"><NavLink to="/" activeClassName="active">Home</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/details" activeClassName="active">Car Details</NavLink></Menu.Item>
                            <Menu.Item key="3"><NavLink to="/form" activeClassName="active">Purchase Form</NavLink></Menu.Item>
                            <Menu.Item key="4"><NavLink to="/help" activeClassName="active">Help</NavLink></Menu.Item>
                        </Menu>
                    </Header>
            </div>
        );

    }

}

export default AppHeader;