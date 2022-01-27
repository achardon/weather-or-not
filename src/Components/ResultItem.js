import React from 'react';
import { Link } from "react-router-dom";

function ResultItem( {result} ) {
    console.log(result)
  return <div>
      {/* {result.city}, {result.country} */}
      <Link 
        to={`/results/${result.cityID}`}
        key={result.cityID}
        >{result.city}, {result.country}</Link>
      {/* <Link
          to={`/invoices/${invoice.number}`}
          key={invoice.number}
          >
            {invoice.name}
      </Link> */}
  </div>;
}

export default ResultItem;
