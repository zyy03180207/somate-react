import React from 'react';
import './Navigation.less';
import {Link} from 'react-router-dom';
export default class Navigation extends React.Component {

    static defaultProps={
        prefixCls: 'navigation',
        data: [{url:'#', name:'首页', sct: true},
            {url:'#', name:'生活笔记', sct: false},
            {url:'#', name:'技术杂谈', sct: false},
            {url:'#', name:'福利专区', sct: false},
            {url:'#', name:'关于自己', sct: false},
            {url:'#', name:'给我留言', sct: false},
            {url:'#', name:'赞助作者', sct: false},
            {url:'#', name:'技术交流', sct: false}],
    }

    constructor(props, context){
        super(props);
    }

    getItem=()=>{
        const {data, prefixCls} = this.props;
        const itemArr = [];
        for(let idx = 0; idx < data.length; idx++) {
            let itemEl;
            let item = data[idx];
            if(item.sct) {
                itemEl=(<li key={`${prefixCls}-it-${idx}`} className={`${prefixCls}-item`}><a className='native'><Link to={item.url}>{item.name}</Link></a></li>);
            } else {
                itemEl=(<li key={`${prefixCls}-it-${idx}`} className={`${prefixCls}-item`}><a><Link to={item.url}>{item.name}</Link></a></li>);
            }

            itemArr.push(itemEl);
        }
        return itemArr;
    }
    render(){
        const {prefixCls} = this.props;
        const item = this.getItem();
        return(
            <div>
                <div id="nav-header" className="navbar">
                    <ul className="nav">
                        <li id="menu-item-44" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-44">
                            <a href="http://cuiqingcai.com">首页</a>
                        </li>
                        <li id="menu-item-14" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-14">
                            <a href="http://cuiqingcai.com/category/life">生活笔记</a>
                            <ul className="sub-menu">
                                <li id="menu-item-19" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19">
                                    <a href="http://cuiqingcai.com/category/life/notes">个人随笔</a>
                                </li>
                                <li id="menu-item-18" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-18">
                                    <a href="http://cuiqingcai.com/category/life/daily">个人日记</a>
                                </li>
                                <li id="menu-item-15" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-15">
                                    <a href="http://cuiqingcai.com/category/life/presatation">个人展示</a>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-item-7" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-7">
                            <a href="http://cuiqingcai.com/category/technique">技术杂谈</a>
                            <ul className="sub-menu">
                                <li id="menu-item-9" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9">
                                    <a href="http://cuiqingcai.com/category/technique/cc">C/C++</a>
                                </li>
                                <li id="menu-item-11" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11">
                                    <a href="http://cuiqingcai.com/category/technique/java">Java</a>
                                </li>
                                <li id="menu-item-17" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-17">
                                    <a href="http://cuiqingcai.com/category/technique/php">PHP</a>
                                </li>
                                <li id="menu-item-153" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-153">
                                    <a href="http://cuiqingcai.com/category/technique/html">HTML</a>
                                </li>
                                <li id="menu-item-960" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-960">
                                    <a href="http://cuiqingcai.com/category/technique/python">Python</a>
                                </li>
                                <li id="menu-item-1277" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1277">
                                    <a href="http://cuiqingcai.com/category/technique/javascript">JS</a>
                                </li>
                                <li id="menu-item-16" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-16">
                                    <a href="http://cuiqingcai.com/category/technique/other">Other</a>
                                </li>
                            </ul>
                        </li>
                        <li id="menu-item-418" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-418">
                            <a href="http://cuiqingcai.com/category/resources">福利专区</a>
                        </li>
                        <li id="menu-item-851" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-851">
                            <a href="http://cuiqingcai.com/about">关于自己</a>
                        </li>
                        <li id="menu-item-251" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-251">
                            <a href="http://cuiqingcai.com/message">给我留言</a>
                        </li>
                        <li id="menu-item-1131" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1131">
                            <a href="http://cuiqingcai.com/donate">赞助作者</a>
                        </li>
                        <li id="menu-item-4571" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4571">
                            <a href="http://cuiqingcai.com/exchange">技术交流</a>
                        </li>
                        <li style={{float:'right'}}>
                            <div className="toggle-search"><i className="fa fa-search"></i>

                            </div>
                            <div className="search-expand" style={{display:'none'}}>
                                <div className="search-expand-inner">

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    );
    }
}