/**
 * 作为官网或者开发时测试自己的组件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Example1 from './Components/Example1';

ReactDOM.render((
  <Router>
    <header>
      <div className="logo">ts-axios</div>
    </header>
    <div>
      <aside>
        <h2>demo</h2>
        <ul>
          <li>
            <Link to="/example1">example1</Link>
          </li>
          <li>
            <Link to="/example2">example2</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Switch>
          <Route path="/example1" component={Example1} />
          <Route path="/example2" render={() => <div>example2</div>} />
        </Switch>
      </main>
    </div>
  </Router>
), document.getElementById('root'));