import React from 'react';
import {Link} from 'react-router-dom';
export default class ArticleLink extends React.Component {

    static defaultProps={
        oneKind: '一级分类',
        twoKind: '二级分类',
        title: '标题',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {oneKind, twoKind, title} = this.props;
        return (
            <div className="breadcrumbs">
                <a title="返回首页" href="/"><i className="fa fa-home"></i></a> <small>></small>
                <a href="http://cuiqingcai.com/category/technique">{oneKind}</a> <small>></small>
                <a href="http://cuiqingcai.com/category/technique/java">{twoKind}</a> <small>></small>
                <span className="muted">{title}</span></div>
        );
    }
}