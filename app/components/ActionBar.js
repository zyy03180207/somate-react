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
            <div className="container-inner">
                <div className="yusi-logo">
                    <a href="/">
                        <h1>
                            <span className="yusi-mono" style={{fontFamily:''}}>{title}</span>
                            <span className="yusi-bloger">{content}</span>
                        </h1>
                    </a>
                </div>
            </div>
        );
    }
}