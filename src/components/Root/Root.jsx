import React, {PropTypes, Component} from 'react';
import Card from '../Card';
import TopEvents from '../Mixpanel/TopEvents/';
import ReportsGenerated from '../Mixpanel/ReportsGenerated/';
import Subscription from '../Mixpanel/Subscription/';
import SignUps from '../Mixpanel/SignUps/';
import DrivesCaptured from '../Mixpanel/DrivesCaptured/';
import './styles.css';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

import Goals from '../Goals';
import Zendesk from '../Zendesk';
import Copyright from '../Copyright/Copyright';

class Root extends Component {
  constructor(props) {
    super(props);

    this.openPopup = this.openPopup.bind(this);
  }
   openPopup() {
     ModalManager.open(<AddIdea onRequestClose={() => true}/>);

  }

  render() {
    let className = "floating-menu";
    let icon = "add";
    return (
      <div style={{ height: '100%' }}>
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
            <Card style={{ height: '63.6%' }}>
              <Zendesk/>
            </Card>
          </div>
        </div>
        <Copyright />
        <div className={className}>
          <FloatingMenuItem label="" icon={'+'} action={this.openPopup} key="m"/>
        </div>
      </div>
    );
  }
};

class AddIdea extends Component{
  render(){
    const {onRequestClose } = this.props;
    const divStyle = {
      width: '50%',
    };
    return (
      <Modal
        onRequestClose={onRequestClose}
        effect={Effect.Newspaper}
        style={divStyle}>
        <h3 style={{textAlign : 'center'}}>Add Idea</h3>
        <textarea
        className='textField'
        id='addidea'
        name='addidea'
        placeholder={"Add your idea"}
        />
        <button
          className= 'btStyle'
          onClick={ModalManager.close}>
          Close Modal
        </button>
      </Modal>
    );
  }
}

class FloatingMenuItem extends React.Component {

  handleClick() {
    this.props.action();
  }

  render() {
    let buttonStyle = {
      backgroundImage: `url(${this.props.icon})`
    };

    let label;

    if (this.props.label) {
      label = <label>{this.props.label}</label>;
    }

    return <div
      onClick={this.handleClick.bind(this)}
      className="floating-menu-item">
      {label}
      <div className="floating-menu-icon"><i className="material-icons">{this.props.icon}</i></div>
    </div>;
  }
}
export default Root;
