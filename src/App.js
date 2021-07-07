import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";
import { fetchShow } from './api/fetchShow';

import Episodes from "./components/Episodes";
import ShowSelectForm from './components/ShowSelectForm';
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selection, setSelection] = useState('futurama');
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => {
    fetchShow(selection)
      .then(res => {
        setShow(res);
        setSeasons(formatSeasons(res._embedded.episodes));
      });
  }, [selection]);

  const handleChange = e => {
    setSelection(e.target.value);
  };

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!show) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <ShowSelectForm selection={selection} handleChange={handleChange} />
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
