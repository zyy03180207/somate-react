import React from 'react';
import {Link} from 'react-router-dom';
import './ArticleSponsor.less';
export default class ArticleSponsor extends React.Component {

    static defaultProps={
        title: '您的支持是博主写作最大的动力，如果您喜欢我的文章，感觉我的文章对您有帮助，请狠狠点击下面的',

        prefixCls: 'article-sponsor'
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls, title} = this.props;
        return (
            <div className={`${prefixCls}`}>
                <p className={`${prefixCls}-p`}>{title}</p>
                <p style={{textAlign: 'center'}}>
                    <Link to="/donate">
                        <input className={`${prefixCls}-input`} type="button" defaultValue="我要小额赞助" />
                    </Link>
                </p>
            </div>
        );
    }
}