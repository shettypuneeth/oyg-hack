import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import ReactHighcharts from 'react-highcharts';

import Header from '../../Header';
import { PIE_CHART_CONFIG } from '../../chartUtils';
import {
  TOP_EVENT_PAGE_WISE,
  MIX_PANEL_API_TYPES,
  MAP_PAGE_NAME_MIXPANEL_EVENTS,
  MIXPANEL_EVENTS
} from '../../constants';
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
    const events  = MIXPANEL_EVENTS[MAP_PAGE_NAME_MIXPANEL_EVENTS[this.props.page]];
    getTopEventsChartsData(events, this.props.mixPanelAPIType)
      .then(data => {
        let chart = this.refs.chart.getChart();
        chart.series[0].setData(data);
      })
  }

  render() {
    return (
      <div>
        <Header header={`Top features for ${this.props.page} page, ${this.props.mixPanelAPIType}`} />
        <ReactHighcharts
          config={PIE_CHART_CONFIG}
          ref='chart'
        />
      </div>
    );
  }
}

TopEvents.propTypes = {
  page: PropTypes.string,
  mixPanelAPIType: PropTypes.string
};
TopEvents.defaultProps = {
  page: TOP_EVENT_PAGE_WISE.drives,
  mixPanelAPIType: MIX_PANEL_API_TYPES.general
};

export default TopEvents;
