import React from 'react';
import ActionBar from "../components/ActionBar";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';
import Header from "./model/Header";
import NoticeBar from "../components/NoticeBar";
import LeftContent from "../components/LeftContent";
import Article from "../components/Article";
import Pagination from "../components/Pagination";
import RightContent from "../components/RightContent";
import TextWidget from "../components/TextWidget";
import MetasliderWidget from "../components/MetasliderWidget";
import ArchiveWidget from "../components/ArchiveWidget";
import PostlistWidget from "../components/PostlistWidget";
import TagWidget from "../components/TagWidget";
import LinksWidget from "../components/LinksWidget";
import Footer from "../components/Footer";
export default class Resources extends React.Component {
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
            {url:'#', name:'福利专区', sct: true,data:[]},
            {url:'/about', name:'关于自己', sct: false,data:[]},
            {url:'/message', name:'给我留言', sct: false,data:[]},
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
                    {/*左侧*/}
                    <LeftContent>
                        <Article/>
                        <Article/>
                        <Article/>
                        <Article/>
                        <Article/><Article/><Article/><Article/><Article/><Article/><Article/>
                        <Article/><Article/><Article/><Article/><Article/><Article/>
                        {/*分页控件*/}
                        <Pagination/>
                    </LeftContent>
                    {/*右侧Widget控件*/}
                    <RightContent>
                        <TextWidget/>
                        <MetasliderWidget/>
                        <ArchiveWidget/>
                        <PostlistWidget/>
                        <TagWidget/>
                        <LinksWidget/>
                    </RightContent>
                </section>
                {/*底部*/}
                <Footer/>
            </div>
        );
    }

}
