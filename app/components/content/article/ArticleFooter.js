import React from 'react';
import {Link} from 'react-router-dom';
export default class ArticleFooter extends React.Component {

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
            <div className="article-social">
                <a href="javascript:;" data-action="ding" data-id="4833" id="Addlike" className="action">
                    <i className="fa fa-heart-o"></i>喜欢 (<span className="count">6</span>)
                </a>
                <span className="or">or</span>
                <span className="action action-share bdsharebuttonbox">
                    <i className="fa fa-share-alt"></i>
                    分享 (<span className="bds_count" data-cmd="count" title="累计分享0次">0</span>)
                    <div className="action-popover">
                        <div className="popover top in">
                            <div className="arrow"></div>
                            <div className="popover-content">
                                <a href="#" className="sinaweibo fa fa-weibo" data-cmd="tsina" title="分享到新浪微博"></a>
                                <a href="#" className="bds_qzone fa fa-star" data-cmd="qzone" title="分享到QQ空间"></a>
                                <a href="#" className="tencentweibo fa fa-tencent-weibo" data-cmd="tqq" title="分享到腾讯微博"></a>
                                <a href="#" className="qq fa fa-qq" data-cmd="sqq" title="分享到QQ好友"></a>
                                <a href="#" className="bds_renren fa fa-renren" data-cmd="renren" title="分享到人人网"></a>
                                <a href="#" className="bds_weixin fa fa-weixin" data-cmd="weixin" title="分享到微信"></a>
                                <a href="#" className="bds_more fa fa-ellipsis-h" data-cmd="more"></a>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        );
    }
}