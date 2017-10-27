import React from 'react';

export default class HotBar extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div className="hot-posts">
                <h2 className="title">热门排行榜</h2>
                <ul>
                    <li>
                        <p><span className="muted"><a href="javascript:;" data-action="ding" data-id="1052" id="Addlike" className="action"><i className="fa fa-heart-o"></i><span className="count">2487</span> 喜欢</a>
                                    </span>
                        </p><span className="label label-1">1</span><a href="http://cuiqingcai.com/1052.html" title="Python爬虫学习系列教程">Python爬虫学习系列教程</a></li>
                    <li>
                        <p><span className="muted"><a href="javascript:;" data-action="ding" data-id="4320" id="Addlike" className="action"><i className="fa fa-heart-o"></i><span className="count">2287</span> 喜欢</a>
                                    </span>
                        </p><span className="label label-2">2</span><a href="http://cuiqingcai.com/4320.html" title="Python3爬虫视频学习教程">Python3爬虫视频学习教程</a></li>
                    <li>
                        <p><span className="muted"><a href="javascript:;" data-action="ding" data-id="947" id="Addlike" className="action"><i className="fa fa-heart-o"></i><span className="count">1695</span> 喜欢</a>
                                    </span>
                        </p><span className="label label-3">3</span><a href="http://cuiqingcai.com/947.html" title="Python爬虫入门三之Urllib库的基本使用">Python爬虫入门三之Urllib库的基本使用</a></li>
                    <li>
                        <p><span className="muted"><a href="javascript:;" data-action="ding" data-id="927" id="Addlike" className="action"><i className="fa fa-heart-o"></i><span className="count">1643</span> 喜欢</a>
                                    </span>
                        </p><span className="label label-4">4</span><a href="http://cuiqingcai.com/927.html" title="Python爬虫入门一之综述">Python爬虫入门一之综述</a></li>
                    <li>
                        <p><span className="muted"><a href="javascript:;" data-action="ding" data-id="1319" id="Addlike" className="action"><i className="fa fa-heart-o"></i><span className="count">1436</span> 喜欢</a>
                                    </span>
                        </p><span className="label label-3">5</span><a href="http://cuiqingcai.com/1319.html" title="Python爬虫利器二之Beautiful Soup的用法">Python爬虫利器二之Beautiful Soup的用法</a></li>
                </ul>
            </div>
        );
    }
}