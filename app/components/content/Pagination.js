import React from 'react';
/*记载动画*/
export default class Pagination extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div className="pagination">
                <ul>
                    <li className="prev-page"></li>
                    <li className="active"><span>1</span></li>
                    <li><a href='http://cuiqingcai.com/page/2'>2</a></li>
                    <li><a href='http://cuiqingcai.com/page/3'>3</a></li>
                    <li><a href='http://cuiqingcai.com/page/4'>4</a></li>
                    <li><a href='http://cuiqingcai.com/page/5'>5</a></li>
                    <li><span> ... </span></li>
                    <li className="next-page"><a href="http://cuiqingcai.com/page/2">下一页</a></li>
                </ul>
            </div>
        );
    }
}