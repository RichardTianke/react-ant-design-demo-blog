import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import './Sidebar.css';

const {Sider} = Layout;
const {SubMenu} = Menu;


class Sidebar extends React.Component {
    render() {
        return (
            <Sider className="sidebar">
                <div id="logo"></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link className="nav-text" to="/"><Icon type="home"/>Home</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span className="nav-text"><Icon type="user"/>User</span>}>
                        <Menu.Item key="2">
                            <Link className="nav-text" to="/users/create">Create user</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link className="nav-text" to="/users">Users</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4">
                        <Link className="nav-text" to="/setting"><Icon type="setting"/>Setting</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Sidebar;