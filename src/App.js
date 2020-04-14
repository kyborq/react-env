import React from 'react';

import './styles/App.css';

import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Card image='https://sun9-44.userapi.com/c844416/v844416904/17c895/Z55HHZ5fkD4.jpg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat assumenda inventore autem totam, eaque pariatur nobis sed animi accusantium dolorem maiores esse sint maxime odio sequi alias sit minus saepe?</Card>;
  }
}

export default App;
