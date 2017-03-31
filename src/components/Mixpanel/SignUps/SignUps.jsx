import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';
import Header from '../../Header';

import { mixPanelSignUp } from '../../helper';

const cx = classnames.bind(styles);

class SignUps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: ''
    }
  }

  componentDidMount() {
    mixPanelSignUp()
      .then(data => this.setState({
        signUp: data[0].total.toLocaleString(undefined)
      }));
  }

  render() {
    return (
      <div className='signup-container'>
        <Header header='SIGN UPS TODAY' />

        <div className="signup-body">
          <div className="count">
            {this.state.signUp}
          </div>
        </div>

      </div>
    )
  }
}

SignUps.propTypes = {};
SignUps.defaultProps = {};

export default SignUps;
