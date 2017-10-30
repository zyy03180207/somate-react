import React from 'react';
import Header from "./model/Header";
import NoticeBar from "../components/content/NoticeBar";
import Footer from "../components/footer/Footer";
import WrapperPage from "../components/group/WrapperPage";
import TopHeader from "../components/top/TopHeader";
import ArticleContent from "../components/group/ArticleContent";
import Change from "../components/content/Change";
export default class Exchange extends React.Component {
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
            {url:'/message', name:'给我留言', sct: false,data:[]},
            {url:'/donate', name:'赞助作者', sct: false,data:[]},
            {url:'#', name:'技术交流', sct: true,data:[]}],
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
                    <WrapperPage>
                        <TopHeader title="技术交流"/>
                        <ArticleContent>
                            <Change/>
                        </ArticleContent>
                    </WrapperPage>
                </section>
                <Footer/>
            </div>
        );
    }

}
