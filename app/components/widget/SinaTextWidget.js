import React from 'react';

export default class SinaTextWidget extends React.Component {

    static defaultProps={

    }

    constructor(pros, context){
        super(pros);
    }

    render(){
        return(
            <div className="widget widget_text">
                <div className="title">
                    <h2>新浪微博</h2></div>
                <div className="textwidget"><iframe width="100%" height="550" className="share_self" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=550&fansRow=2&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=1&uid=2830678474&verifier=7468dc7b&dpc=1"></iframe></div>
            </div>
        );
    }
}