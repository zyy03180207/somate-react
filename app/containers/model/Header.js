import React from 'react';
import ActionBar from "../../components/ActionBar";
import Navigation from "../../components/Navigation";

export default class Header extends React.Component {

    static defaultProps={
        data:[{url:'/', name:'首页', sct: false,data:[]},
            {url:'/category/life', name:'生活笔记', sct: false,data:[
                {url:'/category/life/notes', name:'个人随笔', sct: false},
                {url:'/category/life/daily', name:'个人日记', sct: false},
                {url:'/category/life/presatation', name:'个人展示', sct: false}
            ]},
            {url:'/category/technique', name:'技术杂谈', sct: false,data:[
                {url:'/category/technique/cc', name:'C/C++', sct: false},
                {url:'/category/technique/java', name:'Java', sct: false},
                {url:'/category/technique/php', name:'PHP', sct: false},
                {url:'/category/technique/html', name:'HTML', sct: false},
                {url:'/category/technique/python', name:'Python', sct: false},
                {url:'/category/technique/javascript', name:'JS', sct: false},
                {url:'/category/technique/other', name:'Other', sct: false}
            ]},
            {url:'/category/resources', name:'福利专区', sct: false,data:[]},
            {url:'/about', name:'关于自己', sct: false,data:[]},
            {url:'/message', name:'给我留言', sct: false,data:[]},
            {url:'/donate', name:'赞助作者', sct: false,data:[]},
            {url:'/exchange', name:'技术交流', sct: false,data:[]}],
    }

    constructor(props, context){
        super(props);
    }

    render(){
        const {data} = this.props;

        return(
            <header id="header" class="header" style={{zIndex:'1'}}>
                <ActionBar title="十五度 " content="人理解迭代，神理解递归" titleStyle={{color:'#FFFFFF'}} actionBarStyle={{background:'#D66464'}}/>
                <Navigation data={data}/>
            </header>
        );
    }
}