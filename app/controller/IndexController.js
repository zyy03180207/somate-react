import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter, Router, BrowserRouter} from 'react-router-dom';
import Home from '../containers/Home.js';
import createHistory from 'history/createBrowserHistory';
import Life from "../containers/Life";
import Technique from "../containers/Technique";
import Resources from "../containers/Resources";
import About from "../containers/About";
import Message from "../containers/Message";
import Donate from "../containers/Donate";
import Exchange from "../containers/Exchange";
import ArticleInfo from "../containers/ArticleInfo";
const history = createHistory();
class IndexController extends React.Component {

    static defaultProps={
        data:[{url:'/', name:'首页', sct: false,data:[]},
            {url:'/category/life', name:'生活笔记', sct: false,data:[
                {url:'/category/life/notes', name:'个人随笔', sct: false},
                {url:'/category/life/daily', name:'个人日记', sct: false},
                {url:'/category/life/presatation', name:'个人展示', sct: false}
            ]},
            {url:'/category/technique', name:'技术杂谈', sct: false,data:[
                {url:'/category/technique/cc', name:'C/C++', sct: false},
                {url:'/category/technique/java', name:'Java', sct: false},
                {url:'/category/technique/php', name:'PHP', sct: false},
                {url:'/category/technique/html', name:'HTML', sct: false},
                {url:'/category/technique/python', name:'Python', sct: false},
                {url:'/category/technique/javascript', name:'JS', sct: false},
                {url:'/category/technique/other', name:'Other', sct: false}
            ]},
            {url:'/category/resources', name:'福利专区', sct: false,data:[]},
            {url:'/about', name:'关于自己', sct: false,data:[]},
            {url:'/message', name:'给我留言', sct: false,data:[]},
            {url:'/donate', name:'赞助作者', sct: false,data:[]},
            {url:'/exchange', name:'技术交流', sct: false,data:[]}],
    }

    render() {
        return(
        <HashRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/life" component={Life}/>
                <Route exact path="/category/life/notes" component={Life}/>
                <Route exact path="/category/life/daily" component={Life}/>
                <Route exact path="/category/life/presatation" component={Life}/>
                <Route exact path="/category/technique" component={Technique}/>
                <Route exact path="/category/technique/cc" component={Technique}/>
                <Route exact path="/category/technique/java" component={Technique}/>
                <Route exact path="/category/technique/php" component={Technique}/>
                <Route exact path="/category/technique/html" component={Technique}/>
                <Route exact path="/category/technique/python" component={Technique}/>
                <Route exact path="/category/technique/javascript" component={Technique}/>
                <Route exact path="/category/technique/other" component={Technique}/>
                <Route exact path="/category/resources" component={Resources}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/message" component={Message}/>
                <Route exact path="/donate" component={Donate}/>
                <Route exact path="/exchange" component={Exchange}/>
                <Route exact path="/*.html" component={ArticleInfo}/>
                <Route exact path="/date/****/**" component={Technique}/>
            </Switch>
        </HashRouter>);
    }

}

ReactDOM.render(<IndexController/>, document.getElementById('root'))