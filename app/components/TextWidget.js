import React from 'react';

export default class TextWidget extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div className="widget widget_text" style={{marginTop:'-100px;'}}>
                <div className="textwidget">
                    <div className="social">
                <a href="http://weibo.com/u/2830678474" rel="external nofollow" title="新浪微博" target="_blank">
                    <i className="sinaweibo fa fa-weibo"></i>
                </a>
                <a  href="http://t.qq.com/CQCcqc123456?preview" rel="external nofollow" title="腾讯微博" target="_blank">
                    <i className="tencentweibo fa fa-tencent-weibo"></i>
                </a>
                <a class="weixin">
                    <i className="weixins fa fa-weixin"></i>
                    <div className="weixin-popover">
                        <div className="popover bottom in">
                            <div className="arrow"></div>
                            <div className="popover-title"></div>
                            <div className="popover-content">
                                <img src="http://cuiqingcai.com/wp-content/themes/Yusi/img/weixin.gif"/>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=cqc@cuiqingcai.com" rel="external nofollow" title="Email" target="_blank">
                    <i className="email fa fa-envelope-o"></i>
                </a>
                <a href="?feed=rss2" rel="external nofollow" target="_blank"  title="订阅本站">
                    <i className="rss fa fa-rss"></i>
                </a>
            </div>
                </div>
            </div>
        );
    }
}