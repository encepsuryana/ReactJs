import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class b extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: 'Belajar ReactJs dengan Mudah!'
    }
  };

  updateState = () => {
    this.setState({nama: 'Belajar dulu JavaScript!'});
  }

  render(){
    return(
      <div className='App'>
        <h1>Belajar Mudah dengan Kita disini!</h1>
        <h2>{this.state.nama}</h2>

        <button onClick = {this.updateState}>Klik Disini</button>
      </div>
    );
  }
}
