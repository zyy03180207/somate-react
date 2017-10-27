import React from 'react';

export default class WrapperPage extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        const {children} = this.props;
        return(
            <div className="pagewrapper clearfix">
                {children}
            </div>

        );
    }
}