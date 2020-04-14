import React from 'react';

import Like from './Like';
import Views from './Views';

import '../styles/Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card'>
        <img src={this.props.image} className='card-image' />
        <p className='card-text'>{this.props.children}</p>

        <div className='card-footer'>
          <Like />
          <Views />
        </div>
      </div>
    );
  }
}

export default Card;
