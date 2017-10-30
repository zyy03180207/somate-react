import React from 'react';
/*文章外边框*/
export default class ArticleContent extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        const {children} = this.props;
        return(
            <article className="article-content">
                {children}
            </article>

        );
    }
}