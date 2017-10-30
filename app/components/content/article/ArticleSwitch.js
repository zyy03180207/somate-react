import React from 'react';
import {Link} from 'react-router-dom';
export default class ArticleSwitch extends React.Component {

    static defaultProps={
        leftitle: '左边文章标题',
        rightitle: '右边文章标题',
        leftUrl: '/4849.html',
        rightUrl: '/4849.html',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {leftitle, rightitle, leftUrl, rightUrl} = this.props;
        return (
            <nav className="article-nav">
                <span className="article-nav-prev">
                    <i className="fa fa-angle-double-left"></i>
                    <Link to={leftUrl} rel="prev">{leftitle}</Link>
                </span>
                <span className="article-nav-next">
                    <Link to={rightUrl} rel="next">{rightitle}</Link>
                    <i className="fa fa-angle-double-right"></i>
                </span>
            </nav>
        );
    }
}