import React from 'react';
import './Navigation.less';
import {Link} from 'react-router-dom';
export default class Navigation extends React.Component {

    static defaultProps={
        prefixCls: 'navigation',
        data: [{url:'#', name:'首页', sct: true,data:[]},
            {url:'#', name:'生活笔记', sct: false,data:[
                {url:'#', name:'个人随笔', sct: false},
                {url:'#', name:'个人日记', sct: false},
                {url:'#', name:'个人展示', sct: false}
            ]},
            {url:'#', name:'技术杂谈', sct: false,data:[
                {url:'#', name:'C/C++', sct: false},
                {url:'#', name:'Java', sct: false},
                {url:'#', name:'PHP', sct: false},
                {url:'#', name:'HTML', sct: false},
                {url:'#', name:'Python', sct: false},
                {url:'#', name:'JS', sct: false},
                {url:'#', name:'Other', sct: false}
            ]},
            {url:'#', name:'福利专区', sct: false,data:[]},
            {url:'#', name:'关于自己', sct: false,data:[]},
            {url:'#', name:'给我留言', sct: false,data:[]},
            {url:'#', name:'赞助作者', sct: false,data:[]},
            {url:'#', name:'技术交流', sct: false,data:[]}],
    }

    constructor(props, context){
        super(props);
    }

    getItem=()=>{
        const {data, prefixCls} = this.props;
        const itemArr = [];
        for(let idx = 0; idx < data.length; idx++) {
            let itemEl;
            const item = data[idx];
            const data1 = item.data;
            if(data1.length > 0) {
                let itemEl;
                const itemArry = [];
                for(let idx = 0; idx < data1.length; idx++) {
                    let item1 = data1[idx];
                    if(item1.sct) {
                        itemEl=(<li key={`${prefixCls}-it-${idx}`} className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item"><Link to={{pathname:item1.url}}>{item1.name}</Link></li>);
                    } else {
                        itemEl=(<li key={`${prefixCls}-it-${idx}`} className="menu-item menu-item-type-custom menu-item-object-custom"><Link to={{pathname:item1.url}}>{item1.name}</Link></li>);
                    }
                    itemArry.push(itemEl);
                }
                let itemEl1;
                if(item.sct) {
                    itemEl1=(<li key={`${prefixCls}-it-${idx}`} className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item"><Link to={{pathname:item.url}}>{item.name}</Link><ul key={`${prefixCls}-it-${idx}`} className="sub-menu">{itemArry}</ul></li>);
                } else {
                    itemEl1=(<li key={`${prefixCls}-it-${idx}`} className="menu-item menu-item-type-custom menu-item-object-custom"><Link to={{pathname:item.url}}>{item.name}</Link><ul key={`${prefixCls}-it-${idx}`} className="sub-menu">{itemArry}</ul></li>);
                }
                itemArr.push(itemEl1);
            } else {
                if(item.sct) {
                    itemEl=(<li key={`${prefixCls}-it-${idx}`} className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item"><Link to={{pathname:item.url}}>{item.name}</Link></li>);
                } else {
                    itemEl=(<li key={`${prefixCls}-it-${idx}`} className="menu-item menu-item-type-custom menu-item-object-custom"><Link to={{pathname:item.url}}>{item.name}</Link></li>);
                }
            }
            itemArr.push(itemEl);
        }
        return itemArr;
    }

    onBlur=()=>{
        // if(this.refs.myTextInput.value=='')this.refs.myTextInput.value='search...';
    }

    onFocus=()=>{
        // if(this.refs.myTextInput.value=='search...')this.refs.myTextInput.value='';
    }

    onSubmit=()=>{
        /*alert(location.href);
        location.href='http://localhost:3000/?s=' + encodeURIComponent(this.refs.myTextInput).replace(/%20/g, '+');
        return false;*/
    }

    render(){
        const {prefixCls} = this.props;
        const item = this.getItem();
        return(
            <div>
                <div id="nav-header" className="navbar">
                    <ul className="nav">
                        {item}
                        <li style={{float:'right'}}>
                            <div className="toggle-search"><i className="fa fa-search"></i></div>
                            <div className="search-expand" style={{display: 'none'}}>
                                <div className="search-expand-inner">
                                    <form method="get" className="searchform themeform" onSubmit={this.onSubmit()} action="/">
                                        <div>
                                            <input ref="myTextInput" type="text" className="search" name="s" onBlur={this.onBlur()} onFocus={this.onFocus()} placeholder="search..."/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    );
    }
}