import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const [input, setInput] = useState(""); // State for input field

  const { weather, thisLocation, values, setPlace } = useStateContext(); // Accessing state from context

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
          <img
            src={search}
            alt="search"
            className="w-[1.5rem] h-[1.5rem]"
          />{" "}
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
      </nav>
      {/* Rendering background layout component */}
      <BackgroundLayout />
      <main className="w-full flex flex-wrap gap-8 py-[10%] items-center justify-center">
        {/* Rendering weather card component */}
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center flex-wrap w-[60%]">
          {/* Container for mini cards */}
          {values?.slice(1, 7).map((curr) => (
            // Mapping over values array to render mini card components
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
