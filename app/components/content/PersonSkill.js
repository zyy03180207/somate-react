import React from 'react';
import './PersonSkill.less';
import Skill from "./Skill";
/*个人简介*/
export default class PersonSkill extends React.Component {

    static defaultProps={
        prefixCls: 'skill',
    }

    constructor(props, context){
        super(props);
    }

    render() {
        const {prefixCls} = this.props;
        return (
            <div>
                <h2 className={`${prefixCls}`}>我的技能树</h2>
                <section className="tech">
                    <Skill name="HTML/CSS/JS" progress="74%"/>
                    <Skill name="C/C++" progress="65%" color="orange"/>
                    <Skill name="JAVA" progress="70%" color="blue"/>
                    <Skill name="ANDROID" progress="80%" color="green"/>
                    <Skill name="PYTHON" progress="50%" color="drakblue"/>
                </section>
            </div>
        );
    }
}