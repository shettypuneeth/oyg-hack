import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';
import Header from '../Header';

const cx = classnames.bind(styles);

class Goals extends Component {
  render() {
    return (
      <div className='goals-container'>
        <Header header='GOALS' />
        
        <section className='goals-body'>
          <ul>
            <li>
              UK subscription to react 2M
            </li>

            <li>
              Mobile dashboard
            </li>

            <li>
              Visit IQ
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

Goals.propTypes = {};

export default Goals;
