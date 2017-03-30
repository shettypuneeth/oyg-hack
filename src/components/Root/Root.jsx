import React, {PropTypes} from 'react';
import Card from '../Card';
import './styles.css';

import Goals from '../Goals';

const Root = () => {
  return (
    <div style={{height: '100%'}}>
      <div className='grid-layout'>
        <div className="grid-column">
          <Card>
            Hello
          </Card>
          <Card>
            Hello
          </Card>
          <Card>
            Hello
          </Card>
        </div>

        <div className="grid-column">
          <Card>
            Hello
          </Card>
          <Card>
            Hello
          </Card>
          <Card>
            Hello
          </Card>
        </div>

        <div className="grid-column">
          <Card>
            <Goals />
          </Card>
          <Card>
            Hello
          </Card>
          <Card>
            Hello
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Root;
