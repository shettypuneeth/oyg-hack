import React, { Component } from 'react';
import classnames from 'classnames/bind';
import jsonp from 'jsonp';
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
    getRequest('https://goals-rest.herokuapp.com/1/api/goals/fetch_priority')
      .then(data => {
        this.setState({
          data: data.result
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
          goals[index]
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
