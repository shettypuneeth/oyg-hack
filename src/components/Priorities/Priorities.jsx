import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';

import Header from '../Header';
import styles from './styles.css';

const cx = classnames.bind(styles);

class Priorities extends Component {
  render() {
    return (
      <section className="priorities-container">
        <Header header='PRIORITIES' />
      </section>
    );
  }
}

Priorities.propTypes = {};
Priorities.defaultProps = {};

export default Priorities;
