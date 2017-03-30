import React, {PropTypes} from 'react';
import Card from '../Card';
import './styles.css';

// TODO: Make the grids dynamically laid out.
const Root = () => {
  return (
    <div style={{height: '100%'}}>
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
    </div>
  );
};

export default Root;
