import React from 'react';
import ActionBar from "../components/ActionBar";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';
import Header from "./model/Header";
import NoticeBar from "../components/NoticeBar";
import Footer from "../components/Footer";
export default class Message extends React.Component {
    static defaultProps={
        data:[{url:'/', name:'首页', sct: false,data:[]},
            {url:'/category/life', name:'生活笔记', sct: false,data:[
                {url:'#', name:'个人随笔', sct: false,data:[]},
                {url:'#', name:'个人日记', sct: false,data:[]},
                {url:'#', name:'个人展示', sct: false,data:[]}
            ]},
            {url:'/category/technique', name:'技术杂谈', sct: false,data:[
                {url:'#', name:'C/C++', sct: false},
                {url:'#', name:'Java', sct: false},
                {url:'#', name:'PHP', sct: false},
                {url:'#', name:'HTML', sct: false},
                {url:'#', name:'Python', sct: false},
                {url:'#', name:'JS', sct: false},
                {url:'#', name:'Other', sct: false}
            ]},
            {url:'/category/resources', name:'福利专区', sct: false,data:[]},
            {url:'/about', name:'关于自己', sct: false,data:[]},
            {url:'#', name:'给我留言', sct: true,data:[]},
            {url:'/donate', name:'赞助作者', sct: false,data:[]},
            {url:'/exchange', name:'技术交流', sct: false,data:[]}],
    }

    render() {
        const {data} = this.props;
        return(
            <div>
                {/*头部*/}
                <Header data={data}/>
                {/*内容*/}
                <section className="container">
                    {/*通知栏*/}
                    <NoticeBar/>
                </section>
                <Footer/>
            </div>
        );
    }

}
