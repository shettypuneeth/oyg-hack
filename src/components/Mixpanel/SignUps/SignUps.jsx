import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';

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
      <div>
        Sign Ups: {this.state.signUp}
      </div>
    )
  }
}

SignUps.propTypes = {};
SignUps.defaultProps = {};

export default SignUps;
