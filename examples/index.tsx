/**
 * 作为官网或者开发时测试自己的组件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Simple from './Components/Simple';
import Base from './Components/Base';
import Error from './Components/Error';
import Extend from './Components/Extend';

ReactDOM.render((
  <Router>
    <header>
      <div className="logo">ts-axios</div>
    </header>
    <div>
      <aside>
        <h1>ts-axios 演示</h1>
        <ul>
          <li>
            <Link to="/simple">simple</Link>
          </li>
          <li>
            <Link to="/base">base</Link>
          </li>
          <li>
            <Link to="/error">error</Link>
          </li>
          <li>
            <Link to="/extend">extend</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Switch>
          <Route path="/simple" component={Simple} />
          <Route path="/base" component={Base} />
          <Route path="/error" component={Error} />
          <Route path="/extend" component={Extend} />          
        </Switch>
      </main>
    </div>
  </Router>
), document.getElementById('root'));
