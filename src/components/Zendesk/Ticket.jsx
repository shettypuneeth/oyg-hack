import React, {PropTypes} from 'react';
import './styles.css';

const propTypes = {};

const Ticket = ({ subject, description, date, link }) => {
  return (
    <div className="ticket-container">
      <div className="ticket-header">
        <div className="subject">
          <a href={link}>
            { subject }
          </a>
        </div>
        <div className="date">
          { date }
        </div>
      </div>

      <div className='desc'>
        { description }
      </div>
    </div>
  );
};

Ticket.propTypes = propTypes;

export default Ticket;
