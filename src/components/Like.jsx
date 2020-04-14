import React from 'react';

import '../styles/Like.css';

class Like extends React.Component {
  state = {
    liked: false,
  };

  constructor(props) {
    super(props);
  }

  toggle() {
    const { liked } = this.state;
    this.setState({ liked: !liked });

    if (liked) {
      this.className = 'liked';
    }
  }

  render() {
    const { liked } = this.state;

    return (
      <div className={'like-button ' + (this.state.liked ? 'liked' : '')} onClick={() => this.toggle()}>
        <span className='material-icons'>favorite</span>
      </div>
    );
  }
}

export default Like;
