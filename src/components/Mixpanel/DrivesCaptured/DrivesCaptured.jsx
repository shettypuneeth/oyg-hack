import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';
import Header from '../../Header';

import { mixPanelDrivesCaptured } from '../../helper';

const cx = classnames.bind(styles);

class SignUps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivesCaptured: ''
    };
    this.callMixPanel = this.callMixPanel.bind(this);
  }

  callMixPanel() {
    mixPanelDrivesCaptured()
      .then(data => this.setState({
        drivesCaptured: data[0].total.toLocaleString(undefined)
      }));
  }

  componentDidMount() {
    this.callMixPanel();
    window.setInterval(this.callMixPanel, 15000);
  }

  render() {
    return (
      <div className='signup-container'>
        <Header header='DRIVES CAPTURED TODAY' />

        <span className="live-banner">LIVE</span>
        <div className="live-indicator">
          <div className="splash"></div>
        </div>

        <div className="signup-body">
          <div className="count">
            {this.state.drivesCaptured}
          </div>
        </div>

      </div>
    )
  }
}

SignUps.propTypes = {};
SignUps.defaultProps = {};

export default SignUps;
