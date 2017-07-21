import React from 'react';
import Breadcrumb from "../../Main/Breadcrumb";
import {Table} from 'antd';
import SearchForm from "./SearchForm";

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
    }),
};

class User extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            breadcrumbs: [
                {href: '/', type: 'home', name: 'Home'},
                {href: '', type: '', name: 'Users'},
            ],
        };
    }

    render(){
        return (
            <div className="content-user">
                <Breadcrumb breadcrumbs={this.state.breadcrumbs}/>

                <div className="content-section">
                    <div className="content-search">
                        <SearchForm/>
                    </div>

                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </div>
            </div>
        );
    }
}

export default User;