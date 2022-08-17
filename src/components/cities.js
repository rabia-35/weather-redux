import {useEffect, useState} from 'react'
import {fetchWeather} from "../redux/weatherSlice"
import { useDispatch, useSelector } from 'react-redux'
import {Container} from "react-bootstrap"

function Cities() {
    const status=useSelector(state=>state.weather.status)
    const items=useSelector(state=>state.weather.items)
    const [title, setTitle]=useState("")
    const [city, setCity]=useState("izmir")

    const dispatch=useDispatch()

    let color="black"
    if(items){
      let weatherMain=items.current.weather[0].main;
      if(weatherMain==="Rain" || weatherMain==="Clouds"){
        color="white"
      }
  
    }

    useEffect(()=>{
        dispatch(fetchWeather(city))
    },[dispatch, city])
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        setCity(title)
        setTitle("")
    }

  return (
    <Container>
        <form onSubmit={handleSubmit} className="form text-center pt-4">
            <input 
            type="text"
            value={title}   
            placeholder="write city" 
            onChange={(e)=>setTitle(e.target.value)}
            />
        </form>
        {
            status==="successed" ? (
                <h3 className=' text-center my-5' style={{color:color}}>Weather in <span className='text-uppercase'>{city}</span></h3>
            ): ""
        }
        
    </Container>
  )
}

export default Cities