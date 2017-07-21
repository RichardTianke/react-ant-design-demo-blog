import React from 'react';
import {Breadcrumb, Icon} from 'antd';

function linkBreadcrumb(props, key) {
    const href = props.href;
    const type = props.type;
    const name = props.name;

    return (
        <Breadcrumb.Item key={key} href={href}>
            <Icon type={type}/>
            <span>{name}</span>
        </Breadcrumb.Item>
    );

}

class CustomBreadcrumb extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breadcrumbs: []
        };
    }

    componentWillMount() {
        if (this.props.breadcrumbs) {
            this.setState({
                breadcrumbs: this.props.breadcrumbs
            })
        }
    }

    render() {
        const breadcrumbs = this.state.breadcrumbs;
        return (
            <Breadcrumb>
                {breadcrumbs.map((breadcrumb, index) =>
                    linkBreadcrumb(breadcrumb, index)
                )}
            </Breadcrumb>
        );
    }
}

export default CustomBreadcrumb;