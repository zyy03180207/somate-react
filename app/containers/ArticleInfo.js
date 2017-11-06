import React from 'react';
import Header from "./model/Header";
import NoticeBar from "../components/content/NoticeBar";
import Footer from "../components/footer/Footer";
import TextWidget from "../components/widget/TextWidget";
import ArchiveWidget from "../components/widget/ArchiveWidget";
import PostlistWidget from "../components/widget/PostlistWidget";
import TagWidget from "../components/widget/TagWidget";
import LinksWidget from "../components/widget/LinksWidget";
import LeftContent from "../components/group/LeftContent";
import RightContent from "../components/group/RightContent";
import ArticleLink from "../components/content/article/ArticleLink";
import ArticleHead from "../components/content/article/ArticleHead";
import Banner from "../components/content/article/Banner";
import ArticleContent from "../components/group/ArticleContent";
import ArticleFooter from "../components/content/article/ArticleFooter";
import ArticleSponsor from "../components/content/article/ArticleSponsor";
import Change from "../components/content/Change";
import Comment from "../components/content/Comment";
import ArticleSwitch from "../components/content/article/ArticleSwitch";
import Post from '../common/Post';
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

    constructor(props, context){
        super(props);
        this.state={
            articleInfo: {"keyword": 'dsada'}
        };
    }

    componentDidMount(){
        let url = this.props.location.pathname;
        let id = url.substring(url.lastIndexOf('/') + 1, url.length - 5);
        Post('getArticleInfo', '{id:"'+ id +'"}', function(res) {
            this.setState({articleInfo: res.data});
        }.bind(this));
    }

    getInfo=()=> {
        let {content} = this.state.articleInfo;
        let itemEl = (<div dangerouslySetInnerHTML={{__html:content}}></div>);
        return itemEl;
    }
    render() {
        const item = this.getInfo();
        const {title, ctime, looknum, author, type} = this.state.articleInfo;
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
                        <ArticleLink title={title} oneKind="技术杂谈" twoKind={type}/>
                        <ArticleHead title={title} time={ctime} visit={looknum}
                                     comment="0" author={author} kind={type}/>
                        <Banner/>
                        <ArticleContent>
                            {item}
                            <ArticleFooter/>
                        </ArticleContent>
                        <ArticleSponsor/>
                        <Change/>
                        <ArticleSwitch/>
                        {/*<ArticleRecommend/>*/}
                        {/*<Comment/>*/}
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
                        {/*相关连接*/}
                        {/*<LinksWidget/>*/}
                    </RightContent>
                </section>
                {/*底部*/}
                <Footer/>
            </div>
        );
    }

}
