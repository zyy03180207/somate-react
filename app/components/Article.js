import React from 'react';

export default class Article extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render() {
        return (
            <article className="excerpt">
                <header><a className="label label-important" href="http://cuiqingcai.com/category/technique/python">Python<i
                    className="label-arrow"></i></a>
                    <h2><a target="_blank" href="http://cuiqingcai.com/4853.html" title="一个采集系统的构建">一个采集系统的构建 </a></h2>
                </header>
                <div className="focus">
                    <a target="_blank" href="http://cuiqingcai.com/4853.html"><img className="thumb"
                                                                                   src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2017/09/00602RHagw1f7yyuxxeucj305i05i744.jpg&h=123&w=200&q=90&zc=1&ct=1"
                                                                                   alt="一个采集系统的构建"/></a>
                </div>
                <span className="note"> 整个系统:采集系统:转载请注明：静觅 &raquo; 一个采集系统的构建...</span>
                <p className="auth-span">
                    <span className="muted"><i className="fa fa-user"></i> <a href="http://cuiqingcai.com/author/aiyo">哎哟卧槽</a></span>
                    <span className="muted"><i className="fa fa-clock-o"></i> 1周前 (10-17)</span> <span
                    className="muted"><i className="fa fa-eye"></i> 815浏览</span> <span className="muted"><i
                    className="fa fa-comments-o"></i> <a target="_blank" href="http://cuiqingcai.com/4853.html#respond">0评论</a></span>
                    <span className="muted">
					<a href="javascript:;" data-action="ding" data-id="4853" id="Addlike" className="action actived"><i
                        className="fa fa-heart-o"></i><span className="count">7</span>喜欢</a></span>
                </p>
            </article>
        );
    }
}