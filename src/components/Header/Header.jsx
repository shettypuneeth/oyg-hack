import React, {PropTypes} from 'react';
import styles from './styles.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const propTypes = {};

const Header = ({ className, header }) => {
  const mergedStyles = cx('header', className);
  
  return (
    <div className={mergedStyles}>
      { header }
    </div>
  );
};

Header.propTypes = propTypes;

export default Header;
