import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import ReactHighcharts from 'react-highcharts';

import Header from '../../Header';
import { BAR_CHART_CONFIG } from '../../chartUtils';
import { getReportsGeneratedChartsData } from '../../helper';

import styles from './styles.css';

const cx = classnames.bind(styles);

ReactHighcharts.Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});

class ReportsGenerated extends Component {

  constructor(props) {
    super(props);
    this.state = {
      config: {}
    };
  }

  componentDidMount() {
    getReportsGeneratedChartsData()
      .then(data => {
        let chart = this.refs.chart.getChart();
        chart.series[0].setData(data);
      })
  }

  render() {
    return (
      <div>
        <Header header='Reports generated each week' />
        <br />
        <ReactHighcharts
          config={BAR_CHART_CONFIG}
          ref='chart'
        />
      </div>
    );
  }
}

ReportsGenerated.propTypes = {};
ReportsGenerated.defaultProps = {};

export default ReportsGenerated;
