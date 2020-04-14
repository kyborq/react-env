import React from 'react';

import '../styles/Views.css';

class Views extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { count } = this.state;

    return (
      <div className='views'>
        <span className='views-counter'>{count}</span>
        <span className='material-icons views-icon'>visibility</span>
      </div>
    );
  }
}

export default Views;
