import React from 'react';
import './Sponsor.less';
import GroupCard from "./GroupCard";
/*赞助*/
export default class Change extends React.Component {

    static defaultProps={
        prefixCls: 'change',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div style={{backgroundColor:'#FFF'}}>
                <div id="qrcodes">
                    <div className="row">
                        <GroupCard name="进击的Coder" title1="想结交更多的朋友吗?来进击的Coder瞧瞧吧"
                                   title2="结交朋友、分享福利、灌水吐槽, 我们在这等你"
                                   type="QQ群号" number="8312312111" />
                        <GroupCard name="激进的Coder" title1="想结交更多的朋友吗?来进击的Coder瞧瞧吧"
                                   title2="结交朋友、分享福利、灌水吐槽, 我们在这等你"
                                   type="QQ群号" number="8312312111" theme="#18A57D"/>
                        <GroupCard name="进击的Coder" title1="想结交更多的朋友吗?来进击的Coder瞧瞧吧"
                                   title2="结交朋友、分享福利、灌水吐槽, 我们在这等你"
                                   type="微信公众号" number="扫一扫关注" theme="#18A57D"/>
                <p/></div>
                <p/></div>
            </div>
        );
    }
}