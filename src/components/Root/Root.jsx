import React, {PropTypes} from 'react';
import Card from '../Card';
import './styles.css';

const propTypes = {};

const Root = (props) => {
  return (
    <div className='grid-wrapper'>
      <Card>
        <div style={{width: '100px', height: '300px'}}>Hello</div>
      </Card>
      
      <Card>
        Hello
      </Card>
      
      <Card>
        Hello
      </Card>
    </div>
  );
};

Root.propTypes = propTypes;

export default Root;
