import React, { useState } from 'react';
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
        <h1 className="wolrd">{`Page ${page} of 100`} </h1>
      </div>
    </div>
  );
}

function Search({setPage}) {
  const [name, setName] = useState();

  function handleClick(e) {
    e.preventDefault();
    setName('');
    const pageNumber = Number(e.target.children[0].value);
    if (pageNumber > 0 && pageNumber <= 100)
      setPage(pageNumber);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input  
          className="input"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Enter Page Number"
        />
        <button className="button" type="submit">Go</button>
      </form>
    </div>
  );
}

function PageNav({direction, page, setPage}) {

  function handleRight() {
    if (page > 0 && page < 100)
      setPage(page+1);
  }

  function handleLeft() {
    if (page > 1 && page <= 100)
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

function Images({page}) {

  const array = Array.from(Array(4500).keys());

  const cars = array.slice((page-1) * 45, (page-1) * 45 + 45);

  const images = cars.map((image) => 
        <img
          key={image.toString()}
          src={process.env.PUBLIC_URL + `/images/${image}.jpg`}
          alt={image}
        />
  );

  return (
    <div className="images">
      {images}
    </div>
  );
}

export default function Gallery() {
  const [page, setPage] = useState(1);

  return (
    <div className="wolrd">
      <div className="nav">
        <Header page={page} setPage={setPage} />
        <Search setPage={setPage} />
        <PageNav direction='left' page={page} setPage={setPage} />
        <PageNav direction='right' page={page} setPage={setPage} />
        <Images page={page} />
      </div>
    </div>
  );
}
