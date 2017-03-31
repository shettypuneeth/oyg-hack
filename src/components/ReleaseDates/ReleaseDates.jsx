import React, {Component, PropTypes} from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';

const cx = classnames.bind(styles);

class ReleaseDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : ''
    };
  }

  componentDidMount() {
    //TODO call the DB backend
  }

  render() {
    return (
      <section className="releaseDates-container">
        <div className="releaseDates-header">
          {this.state.data}
        </div>
      </section>
    );
  }
}

ReleaseDates.propTypes = {};
ReleaseDates.defaultProps = {};

export default ReleaseDates;
