import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../Home/Home';
import * as routes from '../../routes';
import './styles.css';
import Magic from './magic-meme.jpg';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <ul className='list'>
              <li>
                <Link to='/' >
                  Home
                </Link>
              </li>
              <li>
                <Link to='/demo'>
                  Demos
                </Link>
              </li>
            </ul>
          </div>

          <hr/>

          <Route exact path="/" component={Home} />
          <Route path="/demo" component={routes.Demo} />
          
          <div>
            <img
              className='image'
              src={Magic}
              alt=""
            />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
  