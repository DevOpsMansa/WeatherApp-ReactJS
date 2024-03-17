import { useEffect, useState } from "react";

// Custom hook to manage date and time updates
export const useDate = () => {
    // Set default locale to English
    const locale = 'en';
    // State to hold current date
    const [today, setDate] = useState(new Date())

    // Effect to update the date every minute
    useEffect(() => {
        // Set up interval to update date every minute
        const timer = setInterval(() => {
            setDate(new Date())
        }, 60*1000)

        // Clean up interval on unmount or re-render
        return () => {
            clearInterval(timer)
        }
    },[])

    // Extract day, date, and month from current date
    const day = today.toLocaleDateString(locale, {weekday: 'long'})
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`
    // Extract current time in hours and minutes
    const time = today.toLocaleDateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' })

    // Return date and time
    return {
        date, time
    }
}
