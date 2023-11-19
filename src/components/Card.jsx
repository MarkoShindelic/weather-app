import { useState} from 'react';
import axios from 'redaxios';
import './card.css';

function Card(){

    const [value, setValue] = useState('');
    const [condition, setCondition] = useState();
    const [img, setImg] = useState();


    let key = "72f27effc36e4eb1b33191333231811";
    let baseURL = "http://api.weatherapi.com/v1";
    let URL = "http://api.weatherapi.com/v1/current.json?key=72f27effc36e4eb1b33191333231811&q="+ value +"&aqi=no"
    let imgLink = img;
    
    const inputChange = event =>{
        setValue(event.target.value)  
    }

    const [temp, setTemp] = useState();

    const onClick = () => {
       
        axios.get(URL)
        .then(res => {
            console.log(res);
            setTemp(res.data.current.temp_c);
            setCondition(res.data.current.condition.text);
            setImg(res.data.current.condition.icon);
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <>
        <div className='card-container' >
            <h2>Weather App</h2>
            <input name="city" type='text' placeholder='Enter city' value = {value} onChange={inputChange} />
            <hr className='line'/>
           {temp ? ( <p>Temperature: <em className='response'> {temp}°C</em></p>) : <p>Temperature: </p>}
            <p>Weather: <em className='response'>{condition}</em></p>
    
        <div className='button-container'>
            <img src={imgLink} />
            <button onClick={onClick}>Get Weather</button>
            
            </div>
        </div>
        </>
    )
}
export default Card;