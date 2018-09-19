import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Image extends Component {
    state = {page: 0}

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    });
  }

  render() {

  const array = Array.from(Array(4504).keys())

  let cars = array.slice(this.state.page * 10, this.state.page * 10 + 10);

  let images = cars.map( image => {
    return <img 
    key={image} 
    src={`https://d-wolrd.co/images/${image}.jpg`}
    alt="Drift Car"
    />
  });


  return (
    <div className="wolrd">
    <h1>{`Page: ${this.state.page}`}</h1>
    <div onClick={this.nextPage}>
      {images}
    </div>
    </div>
    );
  };
}

ReactDOM.render(
  <Image />, 
  document.getElementById('root')
  );