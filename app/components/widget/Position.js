import React from 'react';
/*职位列表*/
export default class Position extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <li>
                <div style={{overflow:'hidden'}}>
                    <div style={{float:'left',width: '35%',textAlign: 'center'}}>
                        <img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2016/11/baiguan_logo.png" style={{width:'80px'}} />
                    </div>
                    <div style={{float:'left',width:'60%',lineHeight:'30px'}}>
                        <a href="http://cuiqingcai.com/3323.html">百观科技 – 爬虫数据工程师</a>
                    </div>
                </div>
            </li>
        );
    }
}