import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';

import Header from '../Header';
import Tickets from './Ticket';
import { getZendeskRequest } from '../Services/Request'
import { processZenDeskData } from '../helper'

const cx = classnames.bind(styles);

class Zendesk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      selectedTicket: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { selectedTicket } = this.state;
    const newId = selectedTicket === id ? null : id;
    this.setState({
      selectedTicket: newId
    });
  }

  componentDidMount() {
    getZendeskRequest('https://mileiq.zendesk.com/api/v2/search.json?query=type:ticket status:open priority:urgent&sort_by=created_at&sort_order=desc&per_page=5')
      .then(data => {
        const tickets = processZenDeskData(data);
        this.setState({ tickets })
      });
  }

  render() {
    const { tickets, selectedTicket } = this.state;
    const T = tickets.slice(0, 4);
    return (
      <section className="zendesk-container">
        <Header header='zendesk tickets' />

        <div className="zendesk-body">
          { T.map((t, i) => {
            const { subject, description, date, link } = t;
            return (
              <Tickets
                key={i}
                id={i}
                selected={i === selectedTicket}
                handleClick={this.handleClick}
                subject={subject}
                description={description}
                date={date}
                link={link}
              />
            )
          }) }
        </div>
      </section>
    );
  }
}
Zendesk.propTypes = {};
Zendesk.defaultProps = {};

export default Zendesk;
