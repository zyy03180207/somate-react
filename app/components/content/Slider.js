import React from 'react';
import './Slider.less';

export default class Slider extends React.Component {

    static defaultProps={
        prefixCls: 'slider',
    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div id="wowslider-container1" style={{marginBottom:'10px',marginLeft:'30px',zIndex:'0'}}>
                <div className="ws_images">
                    <ul>
                        <li>
                            <a target="_blank" href="http://cuiqingcai.com/4320.html" title="Python3爬虫视频学习教程">
                                <img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2017/04/WechatIMG257-e1491842259390.jpeg" title="Python3爬虫视频学习教程" alt="Python3爬虫视频学习教程" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://cuiqingcai.com/455.html" title="干货！IT小伙伴们实用的网站及工具大集合！持续更新！">
                                <img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2014/11/wallpaper_5226844-1-e1416818686775.jpg" title="干货！IT小伙伴们实用的网站及工具大集合！持续更新！" alt="干货！IT小伙伴们实用的网站及工具大集合！持续更新！" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://cuiqingcai.com/1479.html" title="PHP高级特性学习总结">
                                <img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/03/wallpaper_5254663-e1426747804401.jpg" title="PHP高级特性学习总结" alt="PHP高级特性学习总结" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://cuiqingcai.com/1052.html" title="Python爬虫学习系列教程">
                                <img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5254665-e1424499272248.jpg" title="Python爬虫学习系列教程" alt="Python爬虫学习系列教程" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="ws_thumbs">
                    <div>
                        <a target="_blank" href="#" title="Python3爬虫视频学习教程">
                            <img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2017/04/WechatIMG257-e1491842259390.jpeg&h=62&w=120&q=90&zc=1&ct=1" />
                        </a>
                        <a target="_blank" href="#" title="干货！IT小伙伴们实用的网站及工具大集合！持续更新！">
                            <img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2014/11/wallpaper_5226844-1-e1416818686775.jpg&h=62&w=120&q=90&zc=1&ct=1" />
                        </a>
                        <a target="_blank" href="#" title="PHP高级特性学习总结">
                            <img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/03/wallpaper_5254663-e1426747804401.jpg&h=62&w=120&q=90&zc=1&ct=1" />
                        </a>
                        <a target="_blank" href="#" title="Python爬虫学习系列教程">
                            <img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5254665-e1424499272248.jpg&h=62&w=120&q=90&zc=1&ct=1" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}