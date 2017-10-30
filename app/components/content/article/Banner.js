import React from 'react';
import {Link} from 'react-router-dom';
export default class Banner extends React.Component {

    static defaultProps={
        bannerImg: '',
        bannerUrl: '',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {bannerImg, bannerUrl} = this.props;
        return (
            <div className="banner banner-post">
                <Link to="/4320.html">
                    <img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2017/04/横图：崔庆才-自己动手，丰衣足食！Python3网络爬虫实战案例.png" />
                </Link>
            </div>
        );
    }
}