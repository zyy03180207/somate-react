import React from 'react';

export default class LeftContent extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        const {children} = this.props;
        return(
            <div className="content-wrap">
                <div className="content">
                    {children}
                </div>
            </div>
        );
    }
}