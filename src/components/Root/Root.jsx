import React, {PropTypes} from 'react';
import Card from '../Card';
import TopEvents from '../Mixpanel/TopEvents/';
import ReportsGenerated from '../Mixpanel/ReportsGenerated/';
import Subscription from '../Mixpanel/Subscription/';
import SignUps from '../Mixpanel/SignUps/';
import DrivesCaptured from '../Mixpanel/DrivesCaptured/';
import './styles.css';

import Goals from '../Goals';
import ReleaseDates from '../ReleaseDates';
import Zendesk from '../Zendesk';

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
            <SignUps/>
          </Card>
          <Card>
            <DrivesCaptured/>
          </Card>
          <Card>
            <ReportsGenerated/>
          </Card>
        </div>

        <div className="grid-column">
          <Card>
            <Goals />
          </Card>
          <Card style={{height: '63.6%'}}>
            <Zendesk/>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Root;
