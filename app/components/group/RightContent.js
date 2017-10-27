import React from 'react';

export default class RightContent extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        const {children} = this.props;
        return(
            <aside className="sidebar" style={{marginTop:'5px'}}>
                {children}
            </aside>

        );
    }
}