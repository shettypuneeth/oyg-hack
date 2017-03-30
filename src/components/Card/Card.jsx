import React, {PropTypes} from 'react';
import styles from './styles.scss';

const propTypes = {};

const Card = ({ children }) => {
  return (
    <div className='card-container'>
      { children }
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = {};

export default Card;