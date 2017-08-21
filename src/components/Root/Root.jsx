import React, { Component } from 'react';
import Card from '../Card';
import TopEvents from '../Mixpanel/TopEvents/';
import './styles.css';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import { TOP_EVENT_PAGE_WISE, MIX_PANEL_API_TYPES } from '../constants';

class Root extends Component {
  constructor(props) {
    super(props);

    this.openPopup = this.openPopup.bind(this);
  }
   openPopup() {
     ModalManager.open(<AddIdea onRequestClose={() => true}/>);

  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <div className='grid-layout'>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.dashboard}
                mixPanelAPIType={MIX_PANEL_API_TYPES.general}
              />
            </Card>
          </div>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.dashboard}
                mixPanelAPIType={MIX_PANEL_API_TYPES.unique}
              />
            </Card>
          </div>
        </div>
        <div className='grid-layout'>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.drives}
                mixPanelAPIType={MIX_PANEL_API_TYPES.general}
              />
            </Card>
          </div>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.drives}
                mixPanelAPIType={MIX_PANEL_API_TYPES.unique}
              />
            </Card>
          </div>
        </div>
        <div className='grid-layout'>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.reports}
                mixPanelAPIType={MIX_PANEL_API_TYPES.general}
              />
            </Card>
          </div>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.reports}
                mixPanelAPIType={MIX_PANEL_API_TYPES.unique}
              />
            </Card>
          </div>
        </div>
        <div className='grid-layout'>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.settings}
                mixPanelAPIType={MIX_PANEL_API_TYPES.general}
              />
            </Card>
          </div>
          <div className="grid-column">
            <Card>
              <TopEvents
                page={TOP_EVENT_PAGE_WISE.settings}
                mixPanelAPIType={MIX_PANEL_API_TYPES.unique}
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Root;
