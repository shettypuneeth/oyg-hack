import React, {PropTypes} from 'react';
import Card from '../Card';
import './styles.css';

const Root = () => {
  return (
    <div className='grid-wrapper'>
      <div className="grid-item">
        <Card>
          Hello
        </Card>
      </div>

      <div className="grid-item">
        <Card>
          Hello
        </Card>
      </div>

      <div className="grid-item">
        <Card>
          Hello
        </Card>
      </div>
    </div>
  );
};

export default Root;
