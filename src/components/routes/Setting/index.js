import React from 'react';
import Breadcrumb from "../../Main/Breadcrumb";

class Setting extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            breadcrumbs: [
                {href: '', type: 'home', name: 'Home'},
                {href: '', type: '', name: 'Setting'},
            ],
        };
    }

    render(){
        return (
            <div className="content-setting">

                <Breadcrumb breadcrumbs={this.state.breadcrumbs}/>

                <div className="content-section">
                    <h2>Setting</h2>
                    <p>This is test text. This is test text. This is test text. This is test text.</p>
                </div>
            </div>
        );
    }
}

export default Setting;