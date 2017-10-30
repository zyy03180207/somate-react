import React from 'react';
import Position from "./Position";
/*职位推荐*/
export default class PositionWidget extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div className="widget widget_text">
                <div className="title">
                    <h2>职位推荐</h2></div>
                <div className="textwidget">
                    <div className="p-sm" style={{paddingBottom:'15px'}}>
                        <ul>
                            <Position/>
                            <Position/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}