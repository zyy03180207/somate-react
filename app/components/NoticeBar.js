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
            <div className={`${prefixCls}`}>
                <span>{title}</span>
            </div>
        );
    }

}