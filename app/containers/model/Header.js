import React from 'react';
import ActionBar from "../../components/ActionBar";
import Navigation from "../../components/Navigation";

export default class Header extends React.Component {

    static defaultProps={

    }

    constructor(props, context){
        super(props);
    }

    render(){
        return(
            <header id="header" class="header" style={{zIndex:'1'}}>
                <ActionBar title="十五度  " content="  张阳阳的个人博客" titleStyle={{color:'#FFFFFF'}} actionBarStyle={{background:'#D66464'}}/>
                <Navigation/>
            </header>
        );
    }
}