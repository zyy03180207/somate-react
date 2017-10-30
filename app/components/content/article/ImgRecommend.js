import React from 'react';
import {Link} from 'react-router-dom';
export default class ImgRecommend extends React.Component {

    static defaultProps={
        title: '标题',
        imgUrl: 'http://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=http://cuiqingcai.com/wp-content/themes/Yusi/img/pic/7.jpg&h=110&w=185&q=90&zc=1&ct=1',
        toUrl: '/4849.html',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {title, imgUrl, toUrl} = this.props;
        return (
            <li className="related_box">
                <Link to={toUrl} title={title} target="_blank">
                    <img src={imgUrl} alt={title} />
                    <br/>
                    <span className="r_title">{title}</span>
                </Link>
            </li>
        );
    }
}