import React from 'react';
import './Sponsor.less';
/*
import '../../../build/css/SponsorStyle.css';
*/
/*赞助*/
export default class Sponsor extends React.Component {

    static defaultProps={
        prefixCls: 'sponsor',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div>
                <p/>
                <p style={{textAlign: 'center'}}>
                <h2 className={`${prefixCls}-h`}>如果您喜欢我的文章，感觉我的文章对您有帮助，不妨动动您的金手指给予小额赞助，予人玫瑰，手有余香，不胜感激。</h2>
                </p>
                <h2 style={{textAlign: 'center'}}>赞助方式一</h2>
                <h3 style={{textAlign: 'center'}}>手机支付宝扫一扫</h3>
                <p style={{textAlign: 'center'}}>
                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/20150227112604.jpg"><img className="alignnone size-full wp-image-1100" src="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/20150227112604.jpg" alt="1424922459123" width="270px" height="270px" style={{width: '270px'}} /></a>
                </p>
                <h2 style={{textAlign: 'center'}}>赞助方式二</h2>
                <h3 style={{textAlign: 'center'}}>微信扫一扫</h3>
                <div className="weixin">
                    <div className='accordion'>
                        <ul>
                            <li>
                                <div className='title'>
                                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/1.png">&#165;&nbsp;1</a>
                                </div>
                                <p/>
                                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/1.png">
                                        <img src='http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/1.png' />
                                    </a>
                            </li>
                            <li>
                                <div className='title'>
                                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/5.png">&#165;&nbsp;5</a>
                                </div>
                                <p/>
                                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/5.png">
                                        <img src='http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/5.png' />
                                    </a>
                            </li>
                            <li>
                                <div className='title'><a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/10.png">&#165;&nbsp;10</a></div>
                                <p/>
                                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/10.png"><img src='http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/10.png' /></a>
                            </li>
                            <li>
                                <div className='title'><a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/20.png">&#165;&nbsp;20</a></div>
                                <p/>
                                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/20.png"><img src='http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/20.png' /></a>
                            </li>
                            <li>
                                <div className='title'><a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/any.png">&#165;&nbsp;ANY</a></div>
                                <p/>
                                    <a href="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/any.png"><img src='http://qiniu.cuiqingcai.com/wp-content/uploads/2015/02/any.png' /></a>
                            </li>
                        </ul>
                        <div className="bg">
                        </div>

                </div>
            </div>
            </div>
        );
    }
}