import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function CityCard( {searchResults, selectedCityName} ) {

    const params = useParams()
    console.log(params)

    const cityID = params.cityID
    const [cityInfo, setCityInfo] = useState();
    console.log(cityInfo)

    console.log(searchResults)


    useEffect(() => {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityID}?apikey=${process.env.REACT_APP_API_KEY}`)
        .then(r => r.json())
        .then(data => {
            setCityInfo(data)
            // highTemp = data.DailyForecasts[0].Temperature.Maximum.Value
        })
    }, [])

  return <div>
      The high today in {selectedCityName} is {cityInfo? cityInfo.DailyForecasts[0].Temperature.Maximum.Value : null} degrees.
  </div>;
}

export default CityCard;
