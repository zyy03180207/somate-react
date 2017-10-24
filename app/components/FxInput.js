import React from 'react';
import './FxInput.less';

export default class FxInput extends React.Component {

    static defaultProps={
        prefixCls: 'fx-input',
    }

    constructor(props, context) {
        super(props);
    }
    render() {
        const {prefixCls} = this.props;
        return(
            <div>
                <input className={`${prefixCls}`}/>
            </div>
        );
    }
}
