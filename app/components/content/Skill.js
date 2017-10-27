import React from 'react';
/*个人简介*/
export default class Skill extends React.Component {

    static defaultProps={
        prefixCls: 'one-skill',
        name: '',
        progress: '',
        color: 'red',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls,name,progress,color,style} = this.props;
        return (
            <div className = "item">
                <div className = "describe">
                    {name}
                </div>
                <div className="progress">
                    <span className={color} style={{width:progress}}><span>{progress}</span></span>
                </div>
                <p/>
            </div>
        );
    }
}