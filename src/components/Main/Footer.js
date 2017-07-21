import React from 'react';
import {Layout} from 'antd';

class Footer extends React.Component{
    render(){
        return (
            <Layout.Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
            </Layout.Footer>
        );
    }
}

export default Footer;