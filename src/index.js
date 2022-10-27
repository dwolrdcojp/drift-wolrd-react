import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './header.jpg';

function Header({page}) {
  return <h1>{`Page ${page} of 500`} </h1>
}

export default function Image() {
  const inputRef = useRef(null);
  const [page, setPage] = useState(0);

  const reset = () => {
    setPage(0);
  }

  const nextPage = () => {
    if (page !== 500)
      setPage(page + 1);
  }

  const previousPage = () => {
    if (page !== 0)
      setPage(page - 1);
  }

  function handleClick() {
    const pageNumber = inputRef.current.value;
    if (pageNumber >= 0 && pageNumber <= 500)
      setPage(pageNumber);
  }


  const array = Array.from(Array(4504).keys())

  let cars = array.slice(page * 9, page * 9 + 9);

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
        <div className="logo" onClick={reset}>
          <img src={logo} alt="Driftwolrd Logo"/>
        </div>
        <Header page={page} />
        <input 
            className="input" 
            ref={inputRef}
            type="text" 
            placeholder="Enter Page Number"
        />
        <button className="button" onClick={handleClick}>Go</button>
      </div>

      <div className="navigation-next" onClick={nextPage}>
        <div className="header container">
          <div className="arrow arrow-right"></div>
        </div>
      </div>

      <div className="navigation-prev" onClick={previousPage}>
        <div className="header container">
          <div className="arrow arrow-left"></div>
        </div>
      </div>

      {images}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Image />;
root.render(element);


