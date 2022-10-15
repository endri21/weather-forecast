import "./current-weather.css";

const CurrentWeather = ({ currentData }) => {

    console.log(currentData)
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{currentData.city}</p>
                    <p className="weather-description">{currentData.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${currentData.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(currentData.main.temp) }°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>

                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(currentData.main.temp) } °C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{currentData.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{currentData.main.humidity} %</span>

                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{Math.round(currentData.main.pressure) } hPa</span>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeather;