import React from 'react';
import Post from '../../common/Post';
export default class HotBar extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
        this.state={hot: []}
    }

    componentDidMount(){
        Post('getArticle', '{}', function(res) {
            this.setState({hot: res.data});
        }.bind(this));
    }

    getItem=()=>{
        const {hot} = this.state;
        let itemArr = [];
        for(let i = 0; i < hot.length-4; i++) {
            let item = hot[i];
            let itemEl = (<li key={`hot-li-${i}`}>
                    <p><span className="muted"><a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" className="action"><i className="fa fa-heart-o"></i><span className="count">2487</span> 喜欢</a>
                                    </span>
                    </p><span className="label label-1">{i}</span><a href="http://cuiqingcai.com/1052.html" title={item.title}>{item.title}</a></li>);
            itemArr.push(itemEl);
        }
        return itemArr;
    }

    render(){
        const item = this.getItem();
        return(
            <div className="hot-posts">
                <h2 className="title">热门排行榜</h2>
                <ul>
                    {item}
                </ul>
            </div>
        );
    }
}