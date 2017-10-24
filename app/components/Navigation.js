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
            <div className={`${prefixCls}-div`} style={{paddingLeft:'18px'}}>
            <ul className={`${prefixCls}`}>
                {item}
            </ul>
            </div>
        );
    }
}