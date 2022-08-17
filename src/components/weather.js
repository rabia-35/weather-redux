import {useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {fetchWeather} from "../redux/weatherSlice"
import {useDispatch, useSelector} from "react-redux"
import Error from './error'
import Loading from './loading'


function Weather() {
const items=useSelector(state=>state.weather.items)
const error=useSelector(state=>state.weather.error)
const status=useSelector(state=>state.weather.status)
    const dispatch=useDispatch();

useEffect(()=>{
    dispatch(fetchWeather("izmir"))
},[dispatch])

if(error){
  return <Error err={error}  />
}
else if(status==="loading"){
  return <Loading />
}


  return (
    <Container className='border'>
      { items && <>
        <Row>
            <Col className=' mt-1 text-center pt-3' >
               <img src={`https://openweathermap.org/img/wn/${items.current.weather[0].icon}@2x.png`} />
                <div className="d-flex justify-content-center">
                <h1 className='me-4'>{Math.round(items.current.temp)}°C</h1>
                <h5 className='mt-2'>|{items.current.weather[0].main}</h5>
                </div>
            </Col>
            <Col className='mt-5 '>
               <h4>TODAY</h4>
               <p><small>Humidity : </small> {items.current.humidity}%</p>
               <p><small>Wind Speed : </small>{Math.round(items.current.wind_speed)}mph</p>
            </Col>
          </Row> 
        <Row xs={3} lg={6} className="mt-5" >
               {
                    items.daily.map((item,i)=>{
                        let date = new Date((item.dt) * 1000)
                            if(i<7 && i>0){
                                 return(
                                  <Col key={item.dt} className='card'>
                                    <Card >
                                    <h5> {date.toUTCString().slice(0,3)}</h5>
                                      <Card.Img  variant="top" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                      <Card.Body>
                                        <Card.Title className='fs-lg-5 fs-4' >{item.weather[0].main}</Card.Title>
                                        <Card.Text className='fs-sm-5'><span >max {Math.round(item.temp.max)}°C <br/>min {Math.round(item.temp.min)}°C</span></Card.Text>
                                      </Card.Body>
                                    </Card>
                                  </Col>
                                 )
                               }
                           }
                        )
                      
                  }
        </Row>
      </>
       }             
    </Container>
  )
}

export default Weather