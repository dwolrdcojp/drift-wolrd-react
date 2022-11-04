import React, { useState } from 'react';
import './index.css';

function Header({page, setPage}) {
  const reset = () => {
    setPage(1);
  }

  return (
   <div> 
      <div className="logo" onClick={reset}>
        <h1 classname="header"> DRIFTWOLRD </h1>
        <h2 className="wolrd">{`Page ${page} of 100`} </h2>
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
          placeholder="Page Number"
        />
        <button className="button" type="submit">Go</button>
      </form>
    </div>
  );
}

function PageNav({direction, handleLeft, handleRight }) {

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

  const cars = Array.from(new Array(45), (x, i) => i + (page -1) * 45);

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

  function handleRight() {
    if (page > 0 && page < 100)
      setPage(page+1);
  }

  function handleLeft() {
    if (page > 1 && page <= 100)
      setPage(page-1);
  }

  return (
    <div className="wolrd">
      <div className="nav">
        <Header page={page} setPage={setPage} />
        <Search setPage={setPage} />
        <PageNav direction='left'  handleLeft={handleLeft} />
        <PageNav direction='right' handleRight={handleRight} />
        <Images page={page} />
      </div>
    </div>
  );
}
