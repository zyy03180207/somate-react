import React from 'react';
import ActionBar from "../components/ActionBar";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';
import NoticeBar from "../components/NoticeBar";
import Slider from "../components/Slider";
import TextWidget from "../components/TextWidget";
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
                <ActionBar title="静觅  " content="  张阳阳的个人博客" titleStyle={{color:'#FFFFFF'}} actionBarStyle={{background:'#D66464'}}/>
                <Navigation data={data}/>
                <NoticeBar title="博主录制的Python3爬虫视频教程已发布！详情请戳Python3爬虫视频教程！希望大家支持！非常感谢！"/>
                <Slider/><TextWidget/>
            </div>
        );
    }

}
