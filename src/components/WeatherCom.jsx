import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSnowflake, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);


function WeatherCom() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [date, setdate] = useState();
  const weatherIcons = {
    Thunderstorm: "bolt", // Thunderstorm
    Drizzle: "cloud-rain", // Drizzle
    Rain: "cloud-showers-heavy", // Rain
    Snow: "snowflake", // Snow
    Mist: "smog", // Mist
    Smoke: "smog", // Smoke
    Haze: "smog", // Haze
    Dust: "smog", // Dust
    Fog: "smog", // Fog
    Sand: "smog", // Sand
    Ash: "smog", // Ash
    Squall: "wind", // Squall
    Tornado: "wind", // Tornado
    Clear: "sun", // Clear sky
    Clouds: "cloud", // Cloudy
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, []);
  useEffect(() => {
    if (lat !== null && long !== null) {
      fetchData();
    }
  }, [lat, long]); // This effect runs whenever lat or long changes
  const fetchData = async () => {
    try {
      console.log("API Key:", process.env.REACT_APP_API_KEY);
      const apiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
      console.log("API URL:", apiUrl);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      setWeatherData(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  const updateCurrentTime = () => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    const formattedDay = weekday[now.getDay()];
    const formattedToday = now.toLocaleDateString();

    // Map weather condition to an icon

    setdate({
      time: formattedTime,
      today: formattedToday,
      day: formattedDay,
    });
  };



  return (
    <>
      <div className="weather-container bgSec ">
        {weatherData ? (
          <Row>
            <Col>
              <Card className="bgColor text-white">
                <Card.Body>
                  <Card.Title className="d-flex">
                    <div className="mt-2">
                      {date && date.day && (
                        <p className="fs-3">{date.day}</p>
                      )}

                      {date && date.time && (
                        <p className="lead fs-5 textPrimary ms-1" style={{ marginTop: "-0.8rem" }}>{date.time}</p>
                      )}
                    </div>
                    {date && date.today && (
                      <p className="lead textPrimary ms-2" style={{ marginTop: "1.9rem" }}>{date.today}</p>
                    )}
                  </Card.Title>
                  <Card.Text className="d-flex">
                    <div className="fs-1 lh-2 text-dark" style={{ marginTop: "-0.8rem" }}>
                      {weatherData.main.temp}<sup className="textPrimary fs-4">°C</sup>
                    </div>
                    <div style={{ marginTop: "-0.6rem", marginLeft: "2rem" }}>
                      <FontAwesomeIcon icon={weatherIcons[weatherData.weather[0].main]} size="3x" />

                    </div>

                  </Card.Text>
                  <Card.Text style={{ marginTop: "-0.8rem" }}>
                    <FontAwesomeIcon icon={faLocationDot} className="ic" />
                    <span className="fs-5 lead text-dark">
                      {weatherData.name}</span>


                  </Card.Text>
                  <Card.Text style={{ marginTop: "-0.8rem" }}>
                    <FontAwesomeIcon icon={faSnowflake} className="ic" />
                    <span className="fs-5 lead text-dark">
                      {weatherData.weather[0].description}
                    </span>
                  </Card.Text>
                  <Card.Text style={{ marginTop: "-0.8rem" }}>
                    <FontAwesomeIcon icon={faWater} className="ic" />
                    <span className="fs-5 lead text-dark">
                      {weatherData.main.humidity}%
                    </span>
                  </Card.Text>
                  <Card.Text style={{ marginTop: "-0.8rem" }}>
                    <FontAwesomeIcon icon={faWind} className="ic" />
                    <span className="fs-5 lead text-dark">
                      {weatherData.wind.speed}m/s
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  )
}

export default WeatherCom
