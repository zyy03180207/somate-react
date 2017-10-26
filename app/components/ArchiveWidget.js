import React from 'react';
/*记载动画*/
export default class ArchiveWidget extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div className="widget widget_archive">
                <div className="title">
                    <h2>文章归档</h2></div>
                <ul>
                    <li><a href='http://cuiqingcai.com/date/2017/10'>2017年十月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/09'>2017年九月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/08'>2017年八月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/07'>2017年七月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/06'>2017年六月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/05'>2017年五月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/04'>2017年四月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/03'>2017年三月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/02'>2017年二月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2017/01'>2017年一月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/12'>2016年十二月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/11'>2016年十一月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/10'>2016年十月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/09'>2016年九月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/08'>2016年八月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/07'>2016年七月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/06'>2016年六月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/03'>2016年三月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/02'>2016年二月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2016/01'>2016年一月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/12'>2015年十二月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/11'>2015年十一月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/10'>2015年十月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/09'>2015年九月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/08'>2015年八月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/07'>2015年七月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/06'>2015年六月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/05'>2015年五月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/04'>2015年四月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/03'>2015年三月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/02'>2015年二月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2015/01'>2015年一月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2014/12'>2014年十二月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2014/11'>2014年十一月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2014/10'>2014年十月</a></li>
                    <li><a href='http://cuiqingcai.com/date/2014/09'>2014年九月</a></li>
                </ul>
            </div>
        );
    }
}