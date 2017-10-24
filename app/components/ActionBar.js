import React from 'react';
import './ActionBar.less'

export default class ActionBar extends React.Component {

    static defaultProps={
        prefixCls: 'action-bar',
        title: '标题',
        content: '内容',
        titleStyle: {},
        contentStyle: {},
        actionBarStyle: {},
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls,title,content,titleStyle,contentStyle,actionBarStyle} = this.props;
        return(
            <div className={`${prefixCls}`} style={actionBarStyle}>
                <a href="/">
                    <span className={`${prefixCls}-title`} style={titleStyle}>{title}</span>
                    <span className={`${prefixCls}-content`} style={contentStyle}>{content}</span>
                </a>
            </div>
        );
    }
}