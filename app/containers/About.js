import React from 'react';
import ActionBar from "../components/top/ActionBar";
import Navigation from "../components/content/Navigation";
import { Link } from 'react-router-dom';
import Header from "./model/Header";
import NoticeBar from "../components/content/NoticeBar";
import Footer from "../components/footer/Footer";
import WrapperPage from "../components/group/WrapperPage";
import TopHeader from "../components/top/TopHeader";
import ArticleContent from "../components/group/ArticleContent";
import PersonProfile from "../components/content/PersonProfile";
import PersonSkill from "../components/content/PersonSkill";
import Contact from "../components/content/Contact";
import Comment from "../components/content/Comment";
export default class About extends React.Component {
    static defaultProps={
        data:[{url:'/', name:'首页', sct: false,data:[]},
            {url:'/category/life', name:'生活笔记', sct: false,data:[
                {url:'#', name:'个人随笔', sct: false},
                {url:'#', name:'个人日记', sct: false},
                {url:'#', name:'个人展示', sct: false}
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
            {url:'#', name:'关于自己', sct: true,data:[]},
            {url:'/message', name:'给我留言', sct: false,data:[]},
            {url:'/donate', name:'赞助作者', sct: false,data:[]},
            {url:'/exchange', name:'技术交流', sct: false,data:[]}],
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
                    {/*页面包装*/}
                    <WrapperPage>
                        <TopHeader title="关于自己"/>
                        <ArticleContent>
                            <div style={{textIndent:'0px'}}>
                                {/*个人简介*/}
                                <PersonProfile/>
                                {/*技能*/}
                                <PersonSkill/>
                                <Contact/>
                            </div>
                        </ArticleContent>
                        {/*评论*/}
                        <Comment/>
                    </WrapperPage>
                </section>
                <Footer/>
            </div>
        );
    }

}
