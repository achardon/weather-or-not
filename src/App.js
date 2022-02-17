import './App.css';
import Sample from './Components/Sample';
import {useState, useEffect} from 'react';
import SearchCity from './Components/SearchCity';
import ResultsContainer from './Components/ResultsContainer';
import { Route, Routes } from "react-router-dom";
import CityCard from './Components/CityCard';

function App() {

  // console.log(process.env.REACT_APP_API_KEY)

  const [cityID, setCityID] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const [selectedCityName, setSelectedCityName] = useState('')

  console.log(selectedCityName)

  // console.log(searchResults)

  return (
    <div>
      <h1>Weather Or Not?</h1>
      <Routes>
        <Route path="/" element={<SearchCity setSelectedCityName={setSelectedCityName} setSearchResults={setSearchResults} searchResults={searchResults}/>} />
        {/* <Route path="/results" element={<ResultsContainer searchResults={searchResults}/>} /> */}
        <Route path="/results/:cityID" element={<CityCard searchResults={searchResults} selectedCityName={selectedCityName}/>} />

      </Routes>
    </div>
  );
}

export default App;
