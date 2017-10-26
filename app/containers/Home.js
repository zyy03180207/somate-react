import React from 'react';
import Header from "./model/Header";
import NoticeBar from "../components/NoticeBar";
import Slider from "../components/Slider";
import HotBar from "../components/HotBar";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import TextWidget from "../components/TextWidget";
import MetasliderWidget from "../components/MetasliderWidget";
import ArchiveWidget from "../components/ArchiveWidget";
import PostlistWidget from "../components/PostlistWidget";
import TagWidget from "../components/TagWidget";
import LinksWidget from "../components/LinksWidget";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
export default class Home extends React.Component {
    static defaultProps={
        data:[{url:'/', name:'首页', sct: true,data:[]},
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
                        {/*banner*/}
                        {/*<Slider/>*/}
                        {/*热门控件*/}
                        <HotBar/>
                        {/*文章控件*/}
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
