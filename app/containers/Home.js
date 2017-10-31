import React from 'react';
import Header from "./model/Header";
import NoticeBar from "../components/content/NoticeBar";
import Slider from "../components/content/Slider";
import HotBar from "../components/content/HotBar";
import Article from "../components/content/article/Article";
import Footer from "../components/footer/Footer";
import Pagination from "../components/content/Pagination";
import TextWidget from "../components/widget/TextWidget";
import MetasliderWidget from "../components/widget/MetasliderWidget";
import ArchiveWidget from "../components/widget/ArchiveWidget";
import PostlistWidget from "../components/widget/PostlistWidget";
import TagWidget from "../components/widget/TagWidget";
import LinksWidget from "../components/widget/LinksWidget";
import LeftContent from "../components/group/LeftContent";
import RightContent from "../components/group/RightContent";
import PositionWidget from "../components/widget/PositionWidget";
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

    constructor(props, context){
        super(props);
        this.state={
            url: this.props.location.pathname
        };
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
                        {/*banner*/}
                        <Slider/>
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
                        {/*热门专题*/}
                        <MetasliderWidget/>
                        {/*职位推荐*/}
                        {/*<PositionWidget/>*/}
                        <PostlistWidget/>
                        <ArchiveWidget/>
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
