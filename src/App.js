import "./App.css";
import Cities from "./components/cities";
import Weather from "./components/weather";
import { useSelector } from "react-redux";
import Footer from "./components/footer";

function App() {
  const items = useSelector((state) => state.weather.items);
  let weatherMain;
  let background;

  if (items) {
    weatherMain = items.current.weather[0].main;
    console.log(weatherMain);
    if (weatherMain === "Haze" || weatherMain === "Mist") {
      weatherMain = "Fog";
    } else if (weatherMain === "Thunderstorm" || weatherMain === "Thunder") {
      weatherMain = "Rain";
    } else if (
      weatherMain !== "Clouds" &&
      weatherMain !== "Clear" &&
      weatherMain !== "Fog" &&
      weatherMain !== "Rain" &&
      weatherMain !== "Snow"
    ) {
      weatherMain = "default";
    }
    background = `/images/${weatherMain}.jpg`;
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Cities />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
