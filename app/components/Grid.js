import React from 'react';
import './Grid.less';

export default class Grid extends React.Component {

    static defaultProps={
        prefixCls: 'grid',
        data: [],
    }

    constructor(props, context){
        super(props);
    }

    getItem=()=>{
        const {prefixCls,data} = this.props;

        for() {

        }
    }

    render(){
        const item = this.getItem();
        return(
            <div></div>
        );
    }
}