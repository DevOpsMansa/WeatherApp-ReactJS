import { useContext, createContext, useState, useEffect } from "react"; // Importing necessary hooks and components
import axios from 'axios'; // Importing Axios for HTTP requests

// Creating a context for state management
const StateContext = createContext();

// Provider component to manage state and provide it to child components
export const StateContextProvider = ({ children }) => {
    // States to manage weather data, values, selected place, and current location
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Houston');
    const [thisLocation, setLocation] = useState('');

    // Function to fetch weather data from API
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try {
            // Sending request to the API
            const response = await axios.request(options);
            console.log(response.data)
            // Extracting relevant data from the response
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        } catch (e) {
            console.error(e);
            // Handling errors if API request fails
            alert('This place does not exist')
        }
    }

    // Effect to fetch weather data when place changes
    useEffect(() => {
        fetchWeather()
    }, [place])

    // Effect to log values when values change
    useEffect(() => {
        console.log(values)
    }, [values])

    // Providing state values to child components through context
    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

// Custom hook to consume state values from context
export const useStateContext = () => useContext(StateContext)
