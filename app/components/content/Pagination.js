import React from 'react';
/*分页查询*/
export default class Pagination extends React.Component {

    static defaultProps={
        total: 90,
        pageSize: 20,
        pageIndex: 1,
        LENGTH: 10,
    }

    constructor(props, context){
        super(props);
    }

    drawPages=(pageIndex, pageAll)=>{
        const {LENGTH} = this.props;
        let itemArr = [];
        if(pageIndex > 1) {
            let itemEl1 = (<li key={`page-li-o`} className="prev-page"><a href="page/1">首页</a></li>)
            let itemEl2 = (<li key={`page-li-u`} className="prev-page"><a href={`page/${pageIndex - 1}`}>上一页</a></li>);
            itemArr.push(itemEl1);
            itemArr.push(itemEl2);
        }
        if(pageAll <= LENGTH) {
            for(let i = 1; i <= pageAll; i++) {
                let itemEl;
                if(i == pageIndex) {
                    itemEl = (<li key={`page-li-${i}`} className="active"><span>{i}</span></li>);
                } else {
                    itemEl = (<li key={`page-li-${i}`}><a href={`page/${i}`}>{i}</a></li>);
                }
                itemArr.push(itemEl);
            }
        } else {
            let LEN = (LENGTH - LENGTH%2)/2;
            if(pageIndex <= LEN) {
                for(let i = 1; i < LENGTH - 1; i++) {
                    let itemEl;
                    if(pageIndex == i) {
                        itemEl = (<li key={`page-li-${i}`} className="active"><span>{i}</span></li>);
                    } else {
                        itemEl = (<li key={`page-li-${i}`}><a href={`page/${i}`}>{i}</a></li>);
                    }
                    itemArr.push(itemEl);
                }
                let item1 = (<li key={`page-li-s`}><span> ... </span></li>);
                let item2 = (<li key={`page-li-${pageAll}`}><a href={`page/${pageAll}`}>{pageAll}</a></li>);
                itemArr.push(item1);
                itemArr.push(item2);
            } else if(pageIndex > LEN && (pageAll - pageIndex > LENGTH - 2)) {
                itemArr.push(<li key={`page-li-1`}><a href={`page/1`}>1</a></li>);
                itemArr.push(<li key={`page-li-s`}><span> ... </span></li>);
                let LENG = pageIndex - (LENGTH - LENGTH%2)/2 + 2;
                for(let i = LENG; i < LENGTH + LENG - 3; i++) {
                    let itemEl;
                    if(pageIndex == i) {
                        itemEl = (<li key={`page-li-${i}`} className="active"><span>{i}</span></li>);
                    } else {
                        itemEl = (<li key={`page-li-${i}`}><a href={`page/${i}`}>{i}</a></li>);
                    }
                    itemArr.push(itemEl);
                }
                let item1 = (<li key={`page-li-s1`}><span> ... </span></li>);
                let item2 = (<li key={`page-li-${pageAll}`}><a href={`page/${pageAll}`}>{pageAll}</a></li>);
                itemArr.push(item1);
                itemArr.push(item2);
            } else {
                itemArr.push(<li key={`page-li-1`}><a href={`page/1`}>1</a></li>);
                itemArr.push(<li key={`page-li-s`}><span> ... </span></li>);
                let LENG = pageAll - LENGTH + 2;
                for(let i = LENG; i < LENGTH + LENG - 1; i++) {
                    let itemEl;
                    if(pageIndex == i) {
                        itemEl = (<li key={`page-li-${i}`} className="active"><span>{i}</span></li>);
                    } else {
                        itemEl = (<li key={`page-li-${i}`}><a href={`page/${i}`}>{i}</a></li>);
                    }
                    itemArr.push(itemEl);
                }
            }
        }
        if(pageIndex != pageAll) {
            itemArr.push(<li key={`page-li-n`} className="next-page"><a href={`page/${pageIndex + 1}`}>下一页</a></li>);
            itemArr.push(<li key={`page-li-w`} className="next-page"><a href={`page/${pageAll}`}>尾页</a></li>);
        }
        return itemArr;
    }

    getItem=()=>{
        const {pageIndex, total, pageSize} = this.props;
        let pageAll;
        if(total%pageSize==0) {
            pageAll = total/pageSize;
        } else {
            pageAll = (total - total%pageSize)/pageSize + 1;
        }
        const itemArray = this.drawPages(pageIndex, pageAll);
        return itemArray;
    }

    render(){
        const item = this.getItem();
        return(
            <div className="pagination">
                <ul>
                    {item}
                </ul>
            </div>
        );
    }
}