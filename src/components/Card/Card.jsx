import React, {PropTypes} from 'react';
import './styles.css';

const propTypes = {};

const Card = ({ children, style }) => {
  return (
    <div className='card-container scroll' style={style}>
      { children }
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = {};

export default Card;
