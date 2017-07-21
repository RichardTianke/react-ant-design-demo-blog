import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Sidebar from "./components/Sidebar/index";
import Main from "./components/Main/index";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Sidebar/>
                    <Main/>
                </Layout>
            </Router>
        );
    }
}

export default App;