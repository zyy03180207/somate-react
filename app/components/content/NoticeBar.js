import React from 'react';
import './NoticeBar.less'

export default class NoticeBar extends React.Component {

    static defaultProps={
        prefixCls: 'notice-bar',
        title: '',
    }

    constructor(props, context){
        super(props);

    }

    render(){
        const {prefixCls, title,} = this.props;
        return(
            <div className="speedbar">
                <div className="pull-right">
                    <i className="fa fa-user"></i> <a href="/wp-login.php?action=register">投稿</a>&nbsp;&nbsp;&nbsp; <i className="fa fa-power-off"></i> <a href="http://cuiqingcai.com/wp-login.php">登录</a> </div>
                <div className="toptip"><strong className="text-success"><i className="fa fa-volume-up"></i> </strong> 博主录制的Python3爬虫视频教程已发布！详情请戳<a href="http://cuiqingcai.com/4320.html">Python3爬虫视频教程</a>！希望大家支持！非常感谢！</div>
            </div>
        );
    }

}