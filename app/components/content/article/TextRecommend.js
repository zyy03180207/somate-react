import React from 'react';
import {Link} from 'react-router-dom';
export default class TextRecommend extends React.Component {

    static defaultProps={
        title: '标题',
        toUrl: '/4849.html',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {title, toUrl} = this.props;
        return (
            <li>
                <i className="fa fa-minus"></i>
                <a target="_blank" to={toUrl}>{title}</a>
            </li>
        );
    }
}