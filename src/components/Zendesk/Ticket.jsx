import React, {PropTypes} from 'react';
import styles from './styles.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const propTypes = {};

const Ticket = ({ id, subject, selected, description, date, link, handleClick }) => {

  const onClick = () => {
    handleClick(id)
  }

  const descStyles = cx('desc', {
    'full-view': selected
  });

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

      <div
        className={descStyles}
        onClick={onClick}
      >
        { description }
      </div>
    </div>
  );
};

Ticket.propTypes = propTypes;

export default Ticket;
