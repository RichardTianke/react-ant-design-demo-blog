import React from 'react';
import {Form, Input, Button, Radio} from 'antd';

const FormItem = Form.Item;

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'inline',
        };
    }

    handleFormLayoutChange = (e) => {
        this.setState({formLayout: e.target.value});
    }

    render() {
        const {formLayout} = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: {span: 4},
            wrapperCol: {span: 14},
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: {span: 14, offset: 4},
        } : null;
        return (
            <div>
                <Form layout={formLayout}>
                    <FormItem
                        label="Field A"
                        {...formItemLayout}
                    >
                        <Input placeholder="input placeholder"/>
                    </FormItem>
                    <FormItem
                        label="Field B"
                        {...formItemLayout}
                    >
                        <Input placeholder="input placeholder"/>
                    </FormItem>
                    <FormItem {...buttonItemLayout}>
                        <Button type="primary">Submit</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default SearchForm;