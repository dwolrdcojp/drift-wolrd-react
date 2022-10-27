import React, { useState, useRef } from 'react';
import './index.css';
import logo from './header.jpg';

function Header({page, setPage}) {
  const reset = () => {
    setPage(1);
  }

  return (
   <div> 
      <div className="logo" onClick={reset}>
        <img src={logo} alt="Driftwolrd Logo"/>
        <h1 className="wolrd">{`Page ${page} of 500`} </h1>
      </div>
    </div>
  );
}

function Search({setPage}) {
  const inputRef = useRef(null);

  function handleClick() {
    const pageNumber = Number(inputRef.current.value);
    if (pageNumber > 0 && pageNumber <= 500)
      setPage(pageNumber);
  }

  return (
    <>
        <input 
            className="input" 
            ref={inputRef}
            type="text" 
            placeholder="Enter Page Number"
        />
        <button className="button" onClick={handleClick}>Go</button>
    </>
  );
}

function PageNav({direction, page, setPage}) {

  function handleRight() {
    if (page > 0 && page <= 500)
      setPage(page+1);
  }

  function handleLeft() {
    if (page > 1 && page <= 500)
      setPage(page-1);
  }
  return ( 
    <>
      {direction === 'right' &&
        <div className="navigation-next" onClick={handleRight}>
          <div className="header container">
            <div className="arrow arrow-right"></div>
          </div>
        </div>
      }
      {direction === 'left' &&
        <div className="navigation-prev" onClick={handleLeft}>
          <div className="header container">
            <div className="arrow arrow-left"></div>
          </div>
        </div>
      }
    </>
  );
}

export default function Image() {
  const [page, setPage] = useState(1);

  const array = Array.from(Array(4504).keys())

  let cars = array.slice((page-1) * 9, (page-1) * 9 + 9);

  let images = cars.map(image => {
    return <img 
      key={image} 
      src={process.env.PUBLIC_URL + `/images/${image}.jpg`}
      alt="Drift Car"
    />
  });

  return (
    <div className="wolrd">
      <div className="nav">
        <Header page={page} setPage={setPage} />
        <Search setPage={setPage} />
        <PageNav direction='left' page={page} setPage={setPage} />
        <PageNav direction='right' page={page} setPage={setPage} />
        {images}
      </div>
    </div>
  );
}
