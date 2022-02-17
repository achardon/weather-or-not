import React from 'react';
import { Link } from "react-router-dom";

function ResultItem( {result, setSelectedCityName} ) {
    console.log(result)

    function handleClick() {
      setSelectedCityName(`${result.city}, ${result.country}`)
    }

  return <div>
      {/* {result.city}, {result.country} */}
      {/* <button> */}
        <Link onClick = {handleClick}
        to={`/results/${result.cityID}`}
        key={result.cityID}
        >{result.city}, {result.country}</Link>
      {/* <Link
          to={`/invoices/${invoice.number}`}
          key={invoice.number}
          >
            {invoice.name}
      </Link> */}
        {/* </button> */}
  </div>;
}

export default ResultItem;
