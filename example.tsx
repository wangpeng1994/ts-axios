/**
 * 作为官网或者开发时测试自己的组件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';

ReactDOM.render((
  <Router>
    <header>
      <div className="logo">RUI</div>
    </header>
    <div>
      <aside>
        <h2>组件</h2>
        <ul>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Switch>
          <Route path="/icon" component={IconExample} />
          <Route path="/button" render={() => <div>button</div>} />
        </Switch>
      </main>
    </div>
  </Router>
), document.getElementById('root'));