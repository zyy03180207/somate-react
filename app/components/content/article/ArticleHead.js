import React from 'react';
import {Link} from 'react-router-dom';
export default class ArticleHead extends React.Component {

    static defaultProps={
        title: '标题',
        time: '创建时间',
        visit: '0次浏览',
        comment: '0评论',
        author: '作者',
        kind: '分类',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {title, time, visit, comment, author, kind} = this.props;
        return (
            <header className="article-header">
                <h1 className="article-title"><a href="">{title}</a></h1>
                <div className="meta">
                    <span id="mute-category" className="muted"><i className="fa fa-list-alt"></i><a href="http://cuiqingcai.com/category/technique/java"> {kind}</a></span>				<span className="muted"><i className="fa fa-user"></i> <a href="http://cuiqingcai.com/author/twinkle">{author}</a></span>
                    <time className="muted"><i className="fa fa-clock-o"></i> {time}</time>
                    <span className="muted"><i className="fa fa-eye"></i> {visit}浏览</span>
                    <span className="muted"><i className="fa fa-comments-o"></i> <a href="">{comment}评论</a></span>							</div>
            </header>
        );
    }
}