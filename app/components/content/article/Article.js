import React from 'react';
import {Link} from 'react-router-dom';
import Post from '../../../common/Post';
export default class Article extends React.Component {

    static defaultProps={
        kindUrl: '',
        kind: '3213131',
        title: '3213123213',
        url: '00000.html',
        imageSrc: '321321\ndasdad\ndsadadsa',
        introduce: '312312312312312321321312',
        authorUrl: '',
        author: '321',
        time: '312',
        visit: '312',
        comment: '132',
        commentUrl: '312',
        like: '321',
    }

    constructor(props, context){
        super(props);
    }



    render() {
        const {kindUrl, kind, title, url, imgSrc, introduce, authorUrl, author, time, visit, comment, commentUrl, like} = this.props;
        return (
            <article className="excerpt">
                <header><Link className="label label-important" to={kindUrl}>{kind}<i
                    className="label-arrow"></i></Link>
                    <h2><Link target="_blank"  to={url} title={title}>{title} </Link></h2>
                </header>
                <div className="focus">
                    <Link target="_blank" to={url}>
                        <img className="thumb"
                          src={imgSrc}
                          alt={title}/></Link>
                </div>
                <span className="note"> {introduce}</span>
                <p className="auth-span">
                    <span className="muted"><i className="fa fa-user"></i> <a href={authorUrl}>{author}</a></span>
                    <span className="muted"><i className="fa fa-clock-o"></i> {time}</span> <span
                    className="muted"><i className="fa fa-eye"></i> {visit}</span> <span className="muted"><i
                    className="fa fa-comments-o"></i> <a target="_blank" href={commentUrl}>{comment}</a></span>
                    <span className="muted">
					<a href="javascript:;" data-action="ding" data-id="4853" id="Addlike" className="action actived"><i
                        className="fa fa-heart-o"></i><span className="count">{like}</span>喜欢</a></span>
                </p>
            </article>
        );
    }
}