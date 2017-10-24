import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home.js';
import createHistory from 'history/createBrowserHistory';
import Life from "../containers/Life";
import Technique from "../containers/Technique";
import Resources from "../containers/Resources";
import About from "../containers/About";
import Message from "../containers/Message";
import Donate from "../containers/Donate";
import Exchange from "../containers/Exchange";
const history = createHistory();
class IndexController extends React.Component {

    render() {
        return(
        <Router history={history}><Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/category/life" component={Life}/>
            <Route exact path="/category/technique" component={Technique}/>
            <Route exact path="/category/resources" component={Resources}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/message" component={Message}/>
            <Route exact path="/donate" component={Donate}/>
            <Route exact path="/exchange" component={Exchange}/></Switch>
        </Router>);
    }

}

ReactDOM.render(<IndexController/>, document.getElementById('root'))