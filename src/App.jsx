import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context/";
import BackgroundLayout from "./Components/BackgroundLayout";

function App() {
  const [input, setinput] = useState(""); // State for input field
  // const { weather } = useStateContext()
  // console.log(weather)

  return (
    <div className="w-full h-screen text-white px-8">
      {/* Navigation bar */}
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>

        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          {/* Search icon */}
          <img src="{search}" alt="search" className="w-[1.5rem] h-[1.5rem]" />
          {/* Input field */}
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
              }
            }}
            type="text"
            className="focus:outline-none w-full text-[#212121] text-lg" // Styling for input field
            value={input}
            onChange={(e) => setinput(e.target.value)} // Handling input change
          />
        </div>
      </nav>
      <BackgroundLayout>

      </BackgroundLayout>
      <main className="w-full felx flex-wrap gap-8 py-[10%] items-center justify-center">
        
      </main>
    </div>
  );
}

export default App;
