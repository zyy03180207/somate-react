import React from 'react';
/*评论插件*/
export default class Comment extends React.Component {

    static defaultProps={
        prefixCls: 'comment',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div>
                <a name="comments"></a>
                <div id="SOHUCS" sid="847"></div>
                {
                (function(){
                    var appid = 'cyse2vKeA';
                    var conf = 'prod_e440e40ef998fc11db594040d810aefb';
                    var width = window.innerWidth || document.documentElement.clientWidth;
                    if (width < 960) {
                    window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
                } else {
                    var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})});
                }})()
                }
            </div>
        );
    }
}