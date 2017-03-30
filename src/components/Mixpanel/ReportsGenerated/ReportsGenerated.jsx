import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';

import { mixPanelTopEvents } from '../../helper';

import styles from './styles.css';

const cx = classnames.bind(styles);

class ReportsGenerated extends Component {

  componentDidMount() {
    mixPanelTopEvents()
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>Reports Generated</div>
    );
  }
}

ReportsGenerated.propTypes = {};
ReportsGenerated.defaultProps = {};

export default ReportsGenerated;
