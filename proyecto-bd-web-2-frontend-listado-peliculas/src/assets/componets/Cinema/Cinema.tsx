import React from 'react';
import './style.css';

function Cinema() {
  return (
    <>
      <div className="screenboard">
        <h1 className="screenboard-screenname">Screen 1</h1>
        <ul className="movielist">
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 1 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 1 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 2 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 2 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 3 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 3 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 4 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 4 Description / Times</span></div>
          </li>
        </ul>
      </div>

      <div className="screenboard monochrome">
        <h1 className="screenboard-screenname">Screen 2</h1>
        <ul className="movielist">
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 1 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 1 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 2 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 2 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 3 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 3 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 4 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 4 Description / Times</span></div>
          </li>
        </ul>
      </div>

      <div className="screenboard gold-on-black">
        <h1 className="screenboard-screenname">Screen 3</h1>
        <ul className="movielist">
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 1 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 1 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 2 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 2 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 3 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 3 Description / Times</span></div>
          </li>
          <li className="movielist-movie">
            <div className="movielist-movie-title"><span>Movie 4 Title</span></div>
            <div className="movielist-movie-desc"><span>Movie 4 Description / Times</span></div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cinema;