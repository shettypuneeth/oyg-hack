import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import ReactHighcharts from 'react-highcharts';

import Header from '../../Header';
import { PIE_CHART_CONFIG } from '../../chartUtils';
import { getTopEventsChartsData } from '../../helper';
import styles from './styles.css';

const cx = classnames.bind(styles);

ReactHighcharts.Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});

class TopEvents extends Component {

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
        <Header header='Top features for v2 Dashboard' />
        <ReactHighcharts
          config={PIE_CHART_CONFIG}
          ref='chart'
        />
      </div>
    );
  }
}

TopEvents.propTypes = {};
TopEvents.defaultProps = {};

export default TopEvents;
