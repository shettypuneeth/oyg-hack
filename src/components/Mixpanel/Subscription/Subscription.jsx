import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';

import { PIE_CHART_CONFIG } from '../../chartUtils';
import { getTopEventsChartsData } from '../../helper';
const cx = classnames.bind(styles);

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {}
    };
  }

  componentDidMount() {
    getTopEventsChartsData()
      .then(data => {
        let chart = this.refs.chart.getChart();
        chart.series[0].setData(data);
      })
  }

  render() {
    return (
      <div>
        <ReactHighcharts
          config={PIE_CHART_CONFIG}
          ref='chart'
        />
      </div>
    );
  }
}

Subscription.propTypes = {};
Subscription.defaultProps = {};

export default Subscription;
