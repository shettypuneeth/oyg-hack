import React, {PropTypes} from 'react';
import Card from '../Card';
import TopEvents from '../Mixpanel/TopEvents/';
import ReportsGenerated from '../Mixpanel/ReportsGenerated/';
import Subscription from '../Mixpanel/Subscription/';
import './styles.css';

// TODO: Make the grids dynamically laid out.
const Root = () => {
  return (
    <div style={{height: '100%'}}>
      <div className='grid-layout'>
        <div className="grid-column">
          <Card>
            <TopEvents/>
          </Card>
          <Card>
            <Subscription/>
          </Card>
        </div>

        <div className="grid-column">
          <Card>
            Hello
          </Card>
          <Card>
            <ReportsGenerated/>
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
      </div>
    </div>
  );
};

export default Root;
