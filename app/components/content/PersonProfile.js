import React from 'react';
import './PersonProfile.less';
/*个人简介*/
export default class PersonProfile extends React.Component {

    static defaultProps={
        prefixCls: 'profile',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div>
                <p/>
            <h2 style={{textAlign:'center'}}>个人简介</h2>
                <p><img src="http://qiniu.cuiqingcai.com/wp-content/uploads/2015/11/20151022175857.jpg" className={`${prefixCls}-img`}/></p>
                <p className={`${prefixCls}-name`}>张阳阳</p>
            <p id="brief" className={`${prefixCls}-introduce`}>爱生活、爱艺术、爱书画、爱音乐、爱设计、爱编程。</p>
            <p id="brief" className={`${prefixCls}-introduce`}>人生百态，笑口常开，秉承自我，谨慎独行。静觅，静静寻觅生活的美好。</p>
            <p className={`${prefixCls}-introduce`}>
            <a href="http://cv.cuiqingcai.com"><br />
                <input className={`${prefixCls}`} type="button" value="了解更多"/></a>
            </p>
            <p style={{textAlign: 'center'}}></p>
            <p/>
            <p/>
            </div>
        );
    }
}