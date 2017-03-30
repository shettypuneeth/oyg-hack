import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import ReactHighcharts from 'react-highcharts';

import styles from './styles.css';

import { LINE_CHART_CONFIG } from '../../chartUtils';
import { getPaymentChartsData } from '../../helper';
const cx = classnames.bind(styles);

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {}
    };
  }

  componentDidMount() {
    getPaymentChartsData()
      .then(data => {
        const { chartData, chartCategories } = data;
        let chart = this.refs.chart.getChart();
        chartData.forEach(series => chart.addSeries(series));
        chart.xAxis[0].setCategories(chartCategories);
      })
  }

  render() {
    return (
      <div style={{ height: '450px', width: '450px'}}>
        <ReactHighcharts
          config={LINE_CHART_CONFIG}
          ref='chart'
        />
      </div>
    );
  }
}

Subscription.propTypes = {};
Subscription.defaultProps = {};

export default Subscription;
