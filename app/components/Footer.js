import React from 'react';

export default class Footer extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <footer className="footer">
                <div className="footer-inner">
                    <div className="copyright pull-left">
                        <a href="https://blog.programafter.com" title="十五度">十五度</a> 版权所有丨采用<a href="http://yusi123.com/"> 欲思 </a>主题丨基于<a href="http://react-china.org/" title="React"> React </a>构建 © 2017丨托管于 <a rel="nofollow" target="_blank" href="http://www.aliyun.com/">阿里云主机</a>丨鲁ICP备16043911号-3
                    </div>
                </div>
            </footer>
        );
    }
}