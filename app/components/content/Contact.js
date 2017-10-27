import React from 'react';
import ColIcon from "./ColIcon";
/*联系我*/
export default class Contact extends React.Component {

    static defaultProps={
        prefixCls: 'contact',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>与我联系</h2>
                <div className = "icon-contact">
                    <ColIcon name="新浪微博" href="" icon="fa-weibo" theme="sinaweibo"/>
                    <ColIcon name="腾讯微博" href="" icon="fa-tencent-weibo" theme="tencentweibo"/>
                    <ColIcon name="877384401" icon="fa-qq" theme="qq"/>
                    <ColIcon name="18853211461@163.com" href="" icon="fa-envelope" theme="wechat"/>
                    <ColIcon name="GitHub" href="https://github.com/zyy03180207" icon="fa-github" theme="github"/>
                    <ColIcon name="RSS" href="" icon="fa-rss" theme="renren"/>
                </div>
            </div>
        );
    }
}