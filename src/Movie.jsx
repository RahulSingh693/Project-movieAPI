import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Movie.css";

const Movie = () => {
  const [Input, setInput] = useState("");   // user input
  const [Data, setData] = useState([]);     // api data
  const [final, setFinal] = useState('');   //user data store

  const ApiFetch = async () => {
    const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${final}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9fe50803f8msh28e820e949a40f3p1cff8ajsnde2751a2774b',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.d);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    ApiFetch()
    //eslint-disable-next-line
  }, [final]);

  const FormSubmit = e => {
    e.preventDefault();
    setFinal(Input);
  }

  return (
    <>
      <div className="container">
        <span className="head">Search Here For Movies Below</span>
        <form onSubmit={FormSubmit} className="input-box">
          <input
            type="text"
            id="input-item"
            autoComplete="off"
            value={Input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
        <div className="search-box">
          {
            Data.map((val, idx) => {
              if (!val.i || !val.i.imageUrl || !val.y) {
                return null;
              }
              return (
                <div className="card" key={idx}>
                  {val.i && val.i.imageUrl && (
                    <img
                      src={val.i.imageUrl}
                      alt="Photos"
                    />
                  )}
                  <p className="name">{val.l}</p>
                  <p className="detail">Cast: {val.s}</p>
                  <p className="detail">Year: {val.y}</p>
                  <p className="detail">Rank: {val.rank}</p>
                  <p className="detail">Type: {val.q}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );

};

export default Movie;
