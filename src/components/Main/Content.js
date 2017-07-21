import React from 'react';
import {Layout, BackTop} from 'antd';
import {Route} from 'react-router-dom';
import Home from "../routes/Home/index";
import Setting from "../routes/Setting/index";
import User from "../routes/User/index";
import './Content.css';

class Content extends React.Component{
    render(){
        return (
            <Layout.Content className="content">
                <Route exact={true} path='/' component={Home}/>
                <Route path='/setting' component={Setting}/>
                <Route path='/users' component={User}/>
                <BackTop />
            </Layout.Content>
        );
    }
}

export default Content;