import React from 'react';
import Post from '../../../common/Post';
import Article from "./Article";
import Pagination from "../Pagination";
export default class ArticleContent extends React.Component {

    static defaultProps={
        type: 'ALL',
    }

    constructor(props, context){
        super(props);
        this.state={
            article: [],
        };
    }

    componentDidMount(){
        const {type} = this.props;
        Post('getArticle', '{type:"' + type + '"}', function(res) {
            this.setState({article: res.data});
        }.bind(this));
    }

    getArticle=()=>{
        const {article} = this.state;
        const itemArr = [];
        for(let i = 0; i < article.length; i ++) {
            let item = article[i];
            let itemEl = (<Article  key={`article-${i}`} title={item.title} introduce={item.introduce}
                                    imgSrc={item.img} visit={item.looknum} author={item.author} kind={item.type}
                                    time={item.ctime} url={`${item.id}.html`}/>);
            itemArr.push(itemEl);
        }
        return itemArr;
    }

    getPagination=()=>{
        const {article} = this.state;
        let itemArr = [];
        if(article.length > 0) {
            let item = (<Pagination key="pag" pageIndex={13} pageSize={10} total={200} LENGTH={8}/>);
            itemArr.push(item);
        }
        return itemArr;
    }

    render() {
        const item = this.getArticle();
        const item1 = this.getPagination();
        return (
            <div>
                {item}
                {/*分页控件*/}
                {item1}
            </div>
        );
    }
}