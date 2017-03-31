import React, {PropTypes} from 'react';
import Card from '../Card';
import TopEvents from '../Mixpanel/TopEvents/';
import ReportsGenerated from '../Mixpanel/ReportsGenerated/';
import Subscription from '../Mixpanel/Subscription/';
import SignUps from '../Mixpanel/SignUps/';
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
            <ReportsGenerated/>
          </Card>
          <Card>
            <ReleaseDates />
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
            <Zendesk/>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Root;
