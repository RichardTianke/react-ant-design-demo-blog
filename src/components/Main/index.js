import React from 'react';
import {Layout} from 'antd';
import Header from './Header';
import Content from "./Content";
import Footer from "./Footer";
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <Layout className="main">
                <Header/>
                <Content/>
                <Footer/>
            </Layout>
        );
    }
}

export default Main;