import React, { Component } from "react";
import "./app-header";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
    NavLink, Route, RouteComponentProps, withRouter, BrowserRouterProps
  } from "react-router-dom";

interface IProps{ 
}
interface IState { 
    selectedKeys: any[]
 }

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//Type '{}' is missing the following properties from type 
//'Readonly<IProps & RouteComponentProps<{}, StaticContext, any>>': history, location, match
// I gave it RouteComponentProps only
//https://stackoverflow.com/questions/50331285/reactjs-and-typescript-error-ts2322-type-is-not-assignable-to-type-intrinsicat?rq=1
// & RouteComponentProps<{}>
class AppHeader extends Component<IProps & RouteComponentProps, IState>{
    constructor(props: any) {
        super(props);
        console.log(this.props);
        

        // const {match} = this.props;
        // console.log("match",match);
        console.log("header match", this.props.match);
        const {location} = this.props;
        const path = location.pathname.split('/')[1] ? location.pathname.split('/')[1] :"home";
        console.log("header path",path);

        this.state = {
            selectedKeys : [path]
        };
    }

    onNavClick(event: any){
        // this.props.routes[this.props.routes.length-1]
        console.log("header props", this.props);
        console.log("header match", this.props.match);
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
                            defaultSelectedKeys={["home"]}
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

export default withRouter(AppHeader as any);