import React from 'react';
/*个人简介*/
export default class ColIcon extends React.Component {

    static defaultProps={
        prefixCls: 'colicon',
        name: '',
        progress: '',
        color: 'red',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls,href,name,icon,theme} = this.props;
        return (
            <div className="col" id="icon">
                <a href={href} target="_blank" className={`social-icon tool-tip ${theme}`} title={name} data-placement="top"><i className={`fa ${icon}`}></i></a>
            </div>
        );
    }
}