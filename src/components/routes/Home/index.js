import React from 'react';
import Breadcrumb from "../../Main/Breadcrumb";
import {Calendar} from 'antd';

class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            breadcrumbs: [
                {href: '', type: 'home', name: 'Home'},
            ],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event);
    }

    render() {
        return (
            <div className="content-home">
                <Breadcrumb breadcrumbs={this.state.breadcrumbs}/>

                <div className="content-section">
                    <h2>Calendar</h2>
                    <Calendar onPanelChange={this.handleChange} />
                </div>
            </div>

        );
    }
}

export default Home;