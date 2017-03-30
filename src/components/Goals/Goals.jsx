import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';

const cx = classnames.bind(styles);

class Goals extends Component {
  render() {
    return (
      <div className='goals-container'>
        <div className="goals-header">
          GOALS
        </div>
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
