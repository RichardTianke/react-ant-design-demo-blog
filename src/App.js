import React from 'react';
import {Button, DatePicker, message} from 'antd';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
        };
    }

    handleChange(date){
        message.info('您选择的日期是: ' + date.toString());
        this.setState({
            date
        });
    }

    render(){
        return (
            <div style={{ with: 400, margin: '100px auto'}}>

                <DatePicker onChange={value => this.handleChange(value)}/>
                <div style={{ marginTop: 20, marginBottom: 20}}>当前日期: {this.state.date.toString()}</div>


                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default App;