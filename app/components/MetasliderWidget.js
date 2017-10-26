import React from 'react';
/*记载动画*/
export default class MetasliderWidget extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div className="widget widget_metaslider_widget">
                <div className="title">
                    <h2>热门专题</h2></div>
                <div style={{width: '100%'}} className="metaslider metaslider-nivo metaslider-2698 ml-slider meta-slider">

                    <div id="metaslider_container_2698">
                        <div className='slider-wrapper theme-bar'>
                            <div className='ribbon'></div>
                            <div id='metaslider_2698' className='nivoSlider'>
                                <a href="http://cuiqingcai.com/1052.html" target="_blank"><img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/04/wallpaper_5263464.jpg" height="300" width="320" data-title="Python爬虫学习系列教程" title="Python爬虫学习系列教程" alt="Python爬虫学习系列教程" className="slider-2698 slide-1720" /></a>
                                <a href="http://cuiqingcai.com/4320.html" target="_blank"><img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5226849-1.jpg" height="300" width="320" data-title="Python3爬虫学习视频教程" title="OpenGL绘图系列教程" alt="OpenGL绘图系列教程" className="slider-2698 slide-951" /></a>
                                <a href="http://cuiqingcai.com/4352.html" target="_blank"><img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2016/03/20-234x220.jpg" height="300" width="320" data-title="小白学爬虫系列教程" alt="" className="slider-2698 slide-4372" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}