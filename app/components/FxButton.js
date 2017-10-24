import React from 'react';
import './FxButton.less'

export default class FxButton extends React.Component{

    static defaultProps={
        prefixCls: 'fx-button',
        text: '这是按钮',
    }

    constructor(props, context) {
        super(props);
    }

    render() {
        const {prefixCls, text} = this.props;
        return(
            <div>
                <button className={`${prefixCls}`}>{text}</button>
            </div>
        );
    }
}