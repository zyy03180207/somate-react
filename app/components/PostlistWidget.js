import React from 'react';
/*记载动画*/
export default class PostlistWidget extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <div className="widget d_postlist">
                <div className="title">
                    <h2>猜你喜欢</h2></div>
                <ul>
                    <li><a href="http://cuiqingcai.com/990.html" title="Python爬虫实战一之爬取糗事百科段子"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5228661.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="Python爬虫实战一之爬取糗事百科段子" /></span><span className="text">Python爬虫实战一之爬取糗事百科段子</span><span className="muted">2015-02-17</span><span className="muted">576评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/993.html" title="Python爬虫实战二之爬取百度贴吧帖子"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5265936.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="Python爬虫实战二之爬取百度贴吧帖子" /></span><span className="text">Python爬虫实战二之爬取百度贴吧帖子</span><span className="muted">2015-02-17</span><span className="muted">193评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/1001.html" title="Python爬虫实战四之抓取淘宝MM照片"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5270641.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="Python爬虫实战四之抓取淘宝MM照片" /></span><span className="text">Python爬虫实战四之抓取淘宝MM照片</span><span className="muted">2015-02-20</span><span className="muted">153评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/3179.html" title="小白爬虫第一弹之抓取妹子图"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2016/10/1-1506261ZI7.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="小白爬虫第一弹之抓取妹子图" /></span><span className="text">小白爬虫第一弹之抓取妹子图</span><span className="muted">2016-10-28</span><span className="muted">149评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/1076.html" title="Python爬虫实战五之模拟登录淘宝并获取所有订单"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5226152.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="Python爬虫实战五之模拟登录淘宝并获取所有订单" /></span><span className="text">Python爬虫实战五之模拟登录淘宝并获取所有订单</span><span className="muted">2015-02-24</span><span className="muted">131评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/2652.html" title="Python爬虫进阶四之PySpider的用法"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2016/03/兔小妖39.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="Python爬虫进阶四之PySpider的用法" /></span><span className="text">Python爬虫进阶四之PySpider的用法</span><span className="muted">2016-03-26</span><span className="muted">130评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/3472.html" title="小白进阶之Scrapy第一篇"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2016/07/DSC00123.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="小白进阶之Scrapy第一篇" /></span><span className="text">小白进阶之Scrapy第一篇</span><span className="muted">2016-12-07</span><span className="muted">116评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/968.html" title="Python爬虫入门六之Cookie的使用"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5258536-1.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="Python爬虫入门六之Cookie的使用" /></span><span className="text">Python爬虫入门六之Cookie的使用</span><span className="muted">2015-02-15</span><span className="muted">108评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/1052.html" title="Python爬虫学习系列教程"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/wallpaper_5254665-e1424499272248.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="Python爬虫学习系列教程" /></span><span className="text">Python爬虫学习系列教程</span><span className="muted">2015-02-21</span><span className="muted">108评论</span></a></li>
                    <li><a href="http://cuiqingcai.com/2416.html" title="弃用多说，改用畅言"><span className="thumbnail"><img src="http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://qiniu.cuiqingcai.com/wp-content/uploads/2016/02/bg1-e1454442892955.jpg&h=64&w=100&q=90&zc=1&ct=1" alt="弃用多说，改用畅言" /></span><span className="text">弃用多说，改用畅言</span><span className="muted">2016-02-03</span><span className="muted">84评论</span></a></li>
                </ul>
            </div>
        );
    }
}