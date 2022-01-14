import {useState, useEffect} from "react";

function Sample() {

    const [sample, setSample] = useState({})

    useEffect(() => {
        fetch('http://dataservice.accuweather.com/forecasts/v1/daily/1day/60449?apikey=rqD1GdxpTzRkSPRIwkngqiOApSnHCRWG')
        .then(r => r.json())
        .then(data => {
            setSample(data)
        })
    }, [])

    console.log(sample)
    // console.log(sample.DailyForecasts)
    //the following line works at first, but then gets an error upon refresh...?
    //the output should be just the high for the day (temp)
    // console.log(sample.DailyForecasts[0].Temperature.Maximum.Value)
    // const highTemp = sample.DailyForecasts[0].Temperature.Maximum.Value

    return(
        <div>
            SAMPLE
            {/* The high in Santiago, Chile today is: {highTemp} degrees F */}
        </div>
    )
}

export default Sample;