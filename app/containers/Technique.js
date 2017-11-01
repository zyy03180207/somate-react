import React from 'react';
import Header from "./model/Header";
import NoticeBar from "../components/content/NoticeBar";
import LeftContent from "../components/group/LeftContent";
import Article from "../components/content/article/Article";
import Pagination from "../components/content/Pagination";
import RightContent from "../components/group/RightContent";
import TextWidget from "../components/widget/TextWidget";
import MetasliderWidget from "../components/widget/MetasliderWidget";
import ArchiveWidget from "../components/widget/ArchiveWidget";
import PostlistWidget from "../components/widget/PostlistWidget";
import TagWidget from "../components/widget/TagWidget";
import LinksWidget from "../components/widget/LinksWidget";
import Footer from "../components/footer/Footer";
export default class Technique extends React.Component {
    static defaultProps={
        data:[{url:'/', name:'首页', sct: false,data:[]},
            {url:'/category/life', name:'生活笔记', sct: false,data:[
                {url:'#', name:'个人随笔', sct: false,data:[]},
                {url:'#', name:'个人日记', sct: false,data:[]},
                {url:'#', name:'个人展示', sct: false,data:[]}
            ]},
            {url:'/category/technique', name:'技术杂谈', sct: true,data:[
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
            {url:'/message', name:'给我留言', sct: false,data:[]},
            {url:'/donate', name:'赞助作者', sct: false,data:[]},
            {url:'/exchange', name:'技术交流', sct: false,data:[]}],
    }

    constructor(props, context){
        super(props);
        // alert();
    }

    render() {
        const {data} = this.props;
        return(
            <div>
                {/*头部*/}
                <Header url={this.props.location.pathname}/>
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
                        {/*<MetasliderWidget/>*/}
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
