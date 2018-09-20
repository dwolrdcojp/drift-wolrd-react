import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './header.jpg';

class Image extends Component {
    state = {page: 0}

  reset = () => {
    this.setState({
      page: 0
    });
  }

  nextPage = () => {
    if (this.state.page !== 500)
    this.setState({
      page: this.state.page + 1
    });
  }

  previousPage = () => {
    if (this.state.page !== 0)
    this.setState({
      page: this.state.page - 1
    });
  }

  clicked = () => {
    let pageNumber = Number(this.refs.textBox.value);
    if (pageNumber >= 0 && pageNumber <= 500)
    this.setState({ 
      page: pageNumber 
    });
  }

  render() {

  const array = Array.from(Array(4504).keys())

  let cars = array.slice(this.state.page * 9, this.state.page * 9 + 9);

  let images = cars.map( image => {
    return <img 
    key={image} 
    src={process.env.PUBLIC_URL + `/images/${image}.jpg`}
    alt="Drift Car"
    />
  });

  return (
    <div className="wolrd">

      <div className="nav">
        <div className="logo" onClick={this.reset}>
          <img src={logo} alt="Driftwolrd Logo"/>
        </div>

        <h1>{`Page ${this.state.page} of 500`}</h1>
        <input className="input" ref="textBox" type="text" placeholder="Enter Page Number"/>
        <button className="button" onClick={ (e) => { this.clicked(); } }>Go</button>
      </div>

      <div className="navigation-next" onClick={this.nextPage}>
        <div className="header container">
          <div className="arrow arrow-right"></div>
        </div>
      </div>

      <div className="navigation-prev" onClick={this.previousPage}>
        <div className="header container">
          <div className="arrow arrow-left"></div>
        </div>
      </div>

      {images}

    </div>
    );
  };
}

ReactDOM.render(
  <Image />, 
  document.getElementById('root')
  );