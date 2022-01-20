import React from 'react';

function ResultItem( {result} ) {
    console.log(result)
  return <div>
      {result.city}, {result.country}
  </div>;
}

export default ResultItem;
