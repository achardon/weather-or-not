import React from 'react';
import {useState, useEffect} from 'react';
import ResultsContainer from './ResultsContainer';


function SearchCity( {setSearchResults, searchResults} ) {

    const [searchTerm, setSearchTerm] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}=${searchTerm}`)
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=rqD1GdxpTzRkSPRIwkngqiOApSnHCRWG&q=${searchTerm}`)
        .then(r => r.json())
        .then(data => {
            const results = data.map(city => {
                return {city: city.EnglishName, country: city.Country.LocalizedName, cityID: city.Key}
            })
            setSearchResults(results)
            //debugger
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <input type="submit" value="Search"/>
        </form>

        <ResultsContainer searchResults={searchResults}/>
    </div>
  )
}

export default SearchCity;

