import './App.css';
import Cities from './components/cities';
import Weather from './components/weather';
import {useSelector} from "react-redux"
import Footer from './components/footer';

function App() {
  const items=useSelector(state=>state.weather.items)
  let weatherMain;
  let background;
  let color;
  if(items){
    weatherMain=items.current.weather[0].main;
    if(weatherMain==="Haze" || weatherMain==="Mist"){
      weatherMain="Fog"
    }
    if(weatherMain==="Thunderstorm" || weatherMain==="Thunder"){
      weatherMain="Rain"
    }
    background=`/images/${weatherMain}.jpg`;

  }
  
  return (
    <div className='App' style={{  
      backgroundImage: `url(${background})`,
    }} >
      <Cities />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
