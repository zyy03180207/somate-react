import React from 'react';
import {Link} from 'react-router-dom';
import ImgRecommend from "./ImgRecommend";
import TextRecommend from "./TextRecommend";
export default class ArticleRecommend extends React.Component {

    static defaultProps={
        title: '标题',
        time: '创建时间',
        visit: '0次浏览',
        comment: '0评论',
        author: '作者',
        kind: '分类',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {title, time, visit, comment, author, kind} = this.props;
        return (
            <div className="related_top">
                <div className="related_posts">
                    <ul className="related_img">
                        <ImgRecommend title="四达大厦大叔大婶大所大所大所大所大所多多"/>
                        <ImgRecommend/>
                        <ImgRecommend/>
                        <ImgRecommend/>
                    </ul>

                    <div className="relates">
                        <ul>
                            <TextRecommend/>
                            <TextRecommend/>
                            <TextRecommend/>
                            <TextRecommend/>
                            <TextRecommend/>
                            <TextRecommend/>
                            <TextRecommend/>
                            <TextRecommend/>
                            <TextRecommend/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}