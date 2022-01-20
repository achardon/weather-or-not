import React from 'react';
import ResultItem from './ResultItem';

function ResultsContainer( {searchResults} ) {
    console.log(searchResults)
  return <div>
      {searchResults? searchResults.map(result => {
          return <ResultItem key={result.cityID} result ={result} />
      }): null}
  </div>;
}

export default ResultsContainer;
