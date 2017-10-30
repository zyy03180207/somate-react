import React from 'react';
import './GroupCard.less';
/*个人简介*/
export default class GroupCard extends React.Component {

    static defaultProps={
        prefixCls: 'group-card',
        title1: '',
        title2: '',
        type: '',
        number: '',
        theme: '#e9415a',
        name: '',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls,title1,title2,type,number,theme,name} = this.props;
        return (
            <div className="col-xs-12 col-md-4">
                <div className="p-sm" style={{overflow: 'hidden', paddingBottom: '15px'}}>
                    <p className="text-center">{title1}</p>
                    <p className="text-center">{title2}</p>
                    <div className="text-center">
                        <img className="code-img"
                             src="http://qiniu.cuiqingcai.com/wp-content/uploads/2017/05/QRCode1.png"/>
                    </div>
                    <div className="text-center">
                        <p style={{color: theme, fontSize: '15px'}}>{name}</p>
                        <p><span>{type} </span><span style={{color: theme, fontSize: '15px', marginBottom: '45px'}}> {number}  </span>
                            <a style={{padding:'0px',color:'#FFF',backgroundColor: theme}} className="btn btn-xs btn-danger"
                               href="http://shang.qq.com/wpa/qunwpa?idkey=31ed8a7d15339353ad090379bb9243118f90220324a7a0f4b453bce52dcd02b6"
                               target="_blank">立即加入</a>
                        </p></div>
                    <p/></div>
                <p/></div>
        );
    }
}