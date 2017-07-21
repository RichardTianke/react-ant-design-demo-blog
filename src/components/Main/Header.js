import React from 'react';
import {Layout, Menu, Icon, Dropdown, Button} from 'antd';
import './Header.css';

const menu = (
    <Menu theme="dark">
        <Menu.Item key="1">
            Logout
        </Menu.Item>
    </Menu>
);

class Header extends React.Component {
    render() {
        return (
            <Layout.Header className="header">
                {/*<Dropdown overlay={menu} trigger={['click']} >*/}
                    {/*<Button type="button" style={{ float: 'right'}}>Admin <Icon type="down"/></Button>*/}
                {/*</Dropdown>*/}
            </Layout.Header>
        );
    }
}

export default Header;