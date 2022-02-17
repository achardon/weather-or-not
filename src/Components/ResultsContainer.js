import React from 'react';
import ResultItem from './ResultItem';

function ResultsContainer( {searchResults, setSelectedCityName} ) {
    // console.log(searchResults)
  return <div>
      {searchResults? searchResults.map(result => {
          return <ResultItem setSelectedCityName={setSelectedCityName} key={result.cityID} result ={result} />
      }): null}
  </div>;
}

export default ResultsContainer;
