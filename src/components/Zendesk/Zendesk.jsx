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
    this.getList.bind(this);
  }

  componentDidMount() {
    normalRequest('https://058b3586.ngrok.io/goals/zendesk_data/')
      .then(data => {
        const tickets = processZenDeskData(data);
        console.log("tickets",tickets);
        this.setState({
          data: tickets})
      });
  }

  getList(ticketArray) {
    if(ticketArray=== undefined)
      return '';
    let retval = '';
    console.log("Length",ticketArray.length);
    for(let ticket of ticketArray){
      retval += "<div>"+ ticket['subject'] +"</div> <div>"+ticket['description']+"</div>";
    }
    return retval;

  }
  render() {
    return (
      <section className="zendesk-container">
        <div className="zendesk-header">
          {this.getList(this.state.data)}
        </div>
      </section>
    );
  }
}
Zendesk.propTypes = {};
Zendesk.defaultProps = {};

export default Zendesk;
