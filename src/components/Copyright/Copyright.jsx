import React, {PropTypes} from 'react';

const propTypes = {};

const Copyright = () => {
  const styles = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    fontSize: '12px',
    transform: 'translateX(-50%)',
    fontFamily: "'Roboto Condensed', sans-serif"
  }

  return (
    <div style={styles}>
      Made with <span style={{ color: 'red' }}>♥</span> from MDL Bengaluru
    </div>
  );
};

Copyright.propTypes = propTypes;
Copyright.defaultProps = {};

export default Copyright;
