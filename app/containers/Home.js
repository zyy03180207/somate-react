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
export default class Home extends React.Component {
    static defaultProps={
        data:[{url:'#', name:'首页', sct: true},
            {url:'/category/life', name:'生活笔记', sct: false},
            {url:'/category/technique', name:'技术杂谈', sct: false},
            {url:'/category/resources', name:'福利专区', sct: false},
            {url:'/about', name:'关于自己', sct: false},
            {url:'/message', name:'给我留言', sct: false},
            {url:'/donate', name:'赞助作者', sct: false},
            {url:'/exchange', name:'技术交流', sct: false}],
    }

    render() {
        const {data} = this.props;
        return(
            <div>
                {/*头部*/}
                <Header />
                {/*内容*/}
                <section className="container">
                    <NoticeBar/>
                    <div className="content-wrap">
                        <div className="content">
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
                            {/*分页控件*/}
                            <Pagination/>
                        </div>
                    </div>
                    {/*右侧Widget控件*/}
                    <aside className="sidebar" style={{marginTop:'5px'}}>
                        <TextWidget/>
                        <MetasliderWidget/>
                        <ArchiveWidget/>
                        <PostlistWidget/>
                        <TagWidget/>
                        <LinksWidget/>
                    </aside>
                </section>
                {/*底部*/}
                <Footer/>
            </div>
        );
    }

}
