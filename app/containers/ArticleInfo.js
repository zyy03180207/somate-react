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
import ArticleLink from "../components/content/article/ArticleLink";
import ArticleHead from "../components/content/article/ArticleHead";
import Banner from "../components/content/article/Banner";
import ArticleContent from "../components/group/ArticleContent";
import ArticleFooter from "../components/content/article/ArticleFooter";
import ArticleSponsor from "../components/content/article/ArticleSponsor";
import Change from "../components/content/Change";
import Comment from "../components/content/Comment";
import ArticleSwitch from "../components/content/article/ArticleSwitch";
import ArticleRecommend from "../components/content/article/ArticleRecommend";
export default class ArticleInfo extends React.Component {
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



    render() {
        const {data} = this.props;
        return(
            <div>
                {/*头部*/}
                <Header />
                {/*内容*/}
                <section className="container">
                    {/*通知栏*/}
                    <NoticeBar/>
                    {/*左侧*/}
                    <LeftContent>
                        {/*文章分类连接*/}
                        <ArticleLink/>
                        <ArticleHead/>
                        <Banner/>
                        <ArticleContent>
                            <p><strong><b>PS：此文章为小白提供，大佬请绕道！！！！</b></strong></p>
                            <p><strong>首先特别感谢大才哥给我提供这个平台，未来我希望把java这个版块的内容补全。</strong></p>
                            <p>今天要讲的是数据类型，最最最基础的内容~</p>
                            <p>java标识符、数据类型、关键字</p>
                            <p>开始我们先看下如何注释java代码。</p>
                            <p>标识符：类名，方法名，变量。</p>
                            <p>有三种方式分别为</p>
                            <p>//表示注释一行代码</p>
                            <p></p>
                            <p>表示注释一行或者多行代码</p>
                            <p>&nbsp;</p>
                            <p>(从上面到下面都是注释的代码）</p>
                            <p></p>
                            <p><strong><b>PS：此文章为小白提供，大佬请绕道！！！！</b></strong></p>
                            <p><strong>首先特别感谢大才哥给我提供这个平台，未来我希望把java这个版块的内容补全。</strong></p>
                            <p>今天要讲的是数据类型，最最最基础的内容~</p>
                            <p>java标识符、数据类型、关键字</p>
                            <p>开始我们先看下如何注释java代码。</p>
                            <p>标识符：类名，方法名，变量。</p>
                            <p>有三种方式分别为</p>
                            <p>//表示注释一行代码</p>
                            <p></p>
                            <p>表示注释一行或者多行代码</p>
                            <p>&nbsp;</p>
                            <p>(从上面到下面都是注释的代码）</p>
                            <p></p>
                            <p><strong><b>PS：此文章为小白提供，大佬请绕道！！！！</b></strong></p>
                            <p><strong>首先特别感谢大才哥给我提供这个平台，未来我希望把java这个版块的内容补全。</strong></p>
                            <p>今天要讲的是数据类型，最最最基础的内容~</p>
                            <p>java标识符、数据类型、关键字</p>
                            <p>开始我们先看下如何注释java代码。</p>
                            <p>标识符：类名，方法名，变量。</p>
                            <p>有三种方式分别为</p>
                            <p>//表示注释一行代码</p>
                            <p></p>
                            <p>表示注释一行或者多行代码</p>
                            <p>&nbsp;</p>
                            <p>(从上面到下面都是注释的代码）</p>
                            <p></p>
                            <ArticleFooter/>
                        </ArticleContent>
                        <ArticleSponsor/>
                        <Change/>
                        <ArticleSwitch/>
                        {/*<ArticleRecommend/>*/}
                        <Comment/>
                    </LeftContent>
                    {/*右侧Widget控件*/}
                    <RightContent>
                        <TextWidget/>
                        {/*热门专题*/}
                        {/*<MetasliderWidget/>*/}
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
