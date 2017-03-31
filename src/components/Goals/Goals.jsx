import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './styles.css';
import Header from '../Header';
import { getRequest } from '../Services/Request';

const cx = classnames.bind(styles);

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
    this.getList.bind(this);
  }

  componentDidMount() {
    getRequest('https://058b3586.ngrok.io/goals/fetch_priority/')
      .then(data => {
        this.setState({
          data: data
        })
      });
  }

  getList(goals) {
    let list = [];
    if (goals === undefined)
      return '';

console.log("Goals:: ",goals);
    for (let index in goals) {
      list.push(<li key={index}>
        {
          goals[index].goal
      }
      </li>);
    }

    return list;
  }

  render() {
    return (
      <div className='goals-container'>
        <Header header='GOALS'/>

        <section className='goals-body'>

          <ul>
            {this.getList(this.state.data)}
          </ul>
        </section>
      </div>
    );
  }
}

Goals.propTypes = {};

export default Goals;
