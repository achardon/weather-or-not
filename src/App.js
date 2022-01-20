import './App.css';
import Sample from './Components/Sample';
import {useState, useEffect} from 'react';
import SearchCity from './Components/SearchCity';
import ResultsContainer from './ResultsContainer';

function App() {

  // console.log(process.env.REACT_APP_API_KEY)

  const [cityID, setCityID] = useState('')
  const [searchResults, setSearchResults] = useState('')

  console.log(searchResults)

  return (
    <div>
      <h1>Weather Or Not?</h1>
      <Sample />
      <SearchCity setSearchResults={setSearchResults}/>
      <ResultsContainer searchResults={searchResults}/>
    </div>
  );
}

export default App;
