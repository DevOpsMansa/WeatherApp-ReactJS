import { useState, useEffect } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const [input, setInput] = useState(""); // State for input field
  const [viewMode, setViewMode] = useState("current"); // State for view mode
  const [unit, setUnit] = useState("celsius"); // State for selected unit
  const [cachedWeather, setCachedWeather] = useState({}); // State for cached weather data

  const { weather, thisLocation, values, setPlace } = useStateContext(); // Accessing state from context

  useEffect(() => {
    // Check if weather data for this location is cached
    if (!cachedWeather[thisLocation]) {
      // Fetch weather data only if not cached
      fetchWeatherData();
    }
  }, [thisLocation]); // Fetch weather data when location changes

  const fetchWeatherData = () => {
    // Make API call to fetch weather data for this location
    // Update cachedWeather state with fetched data
    // Example:
    // fetch(`API_ENDPOINT?location=${thisLocation}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setCachedWeather(prevWeather => ({
    //       ...prevWeather,
    //       [thisLocation]: data
    //     }));
    //   })
    //   .catch(error => console.error("Error fetching weather data:", error));
  };

  // Conversion function from Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  // Conversion function from Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  // Function to toggle between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "celsius" ? "fahrenheit" : "celsius"));
  };

  const submitCity = () => {
    // Ensure input is not empty before updating place
    if (input.trim() !== "") {
      setPlace(input.trim()); // Update place state with the input value
      setInput(""); // Clear input field after submission
    }
  };

  return (
    <div className="w-full h-screen text-white px-8">
      {/* Navigation bar */}
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>

        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          {/* Search icon */}
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />{" "}
          {/* Rendering search icon */}
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitCity(); // Call submitCity function when Enter key is pressed
              }
            }}
            type="text"
            placeholder="Search city"
            className="focus:outline-none w-full text-[#212121] text-lg" // Styling for input field
            value={input}
            onChange={(e) => setInput(e.target.value)} // Handling input change
          />
        </div>
        <div>
          {/* Toggle button for view mode */}
          <button
            className="text-white bg-orange-500 rounded-md px-3 py-1 mr-4"
            onClick={toggleUnit}
          >
            {unit === "celsius" ? "°C" : "°F"}
          </button>
          <button
            className="text-white bg-orange-500 rounded-md px-3 py-1"
            onClick={() =>
              setViewMode((prevMode) =>
                prevMode === "current" ? "forecast" : "current"
              )
            }
          >
            {viewMode === "current" ? "Show Forecast" : "Show Current"}
          </button>
        </div>
      </nav>
      {/* Rendering background layout component */}
      <BackgroundLayout />
      <main className="w-full flex flex-wrap gap-8 py-[10%] items-center justify-center">
        {/* Conditional rendering based on view mode */}
        {viewMode === "current" ? (
          // Render current weather card component
          <WeatherCard
            place={thisLocation}
            windspeed={weather?.wspd}
            humidity={weather?.humidity}
            temperature={
              unit === "celsius"
                ? weather?.temp
                : celsiusToFahrenheit(weather?.temp)
            }
            heatIndex={
              unit === "celsius"
                ? weather?.heatindex
                : celsiusToFahrenheit(weather?.heatindex)
            }
            iconString={weather?.conditions}
            conditions={weather?.conditions}
          />
        ) : (
          // Render forecast mini cards
          <div className="flex justify-center flex-wrap w-[60%]">
            {/* Container for mini cards */}
            {values?.slice(1, 7).map((curr) => (
              // Mapping over values array to render mini card components
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={
                  unit === "celsius" ? curr.temp : celsiusToFahrenheit(curr.temp)
                }
                iconString={curr.conditions}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
