import React from 'react';
import {Row, Col} from 'antd';

class Products extends React.Component{
    render(){
        return (
            <div className="products">
                <h2>List of products</h2>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
            </div>
        );
    }
}

export default Products;