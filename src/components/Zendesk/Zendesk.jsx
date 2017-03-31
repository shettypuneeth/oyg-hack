import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';

import {normalRequest} from '../Services/Request'
import {processZenDeskData} from '../helper'
const cx = classnames.bind(styles);

class Zendesk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    normalRequest('https://ccc3a677.ngrok.io/goals/zendesk_data/')
      .then(data => {
        const tickets = JSON.stringify(processZenDeskData(data));
        this.setState({
          data: tickets})
      });
  }

  render() {
    return (
      <section className="releaseDates-container">
        <div className="releaseDates-header">
          {this.state.data}
        </div>
      </section>
    );
  }
}
Zendesk.propTypes = {};
Zendesk.defaultProps = {};

export default Zendesk;
