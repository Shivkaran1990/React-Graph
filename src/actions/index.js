import axios from 'axios';
const API_KEY="5b89ae1215b31bb295fcc3f9617e9bab";
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEARHER='FETCH_WEARHER';

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},us`;
    const request=axios.get(url);
    return{
        type:FETCH_WEARHER,
        payload:request
    };
}