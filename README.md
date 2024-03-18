#  React Weather Application

## Project Plan:

### User Story
My mother lives on the other side of planet earth and I always Send her seasonal affectionates by getting clothings, accessories and seasonal needs and but sometimes i tend to send warm weather affectionates and she will sya 'son do you know the weather here is 89 degrees? and you sending me warm clothing'. So, I thought about creating an app where I can search for the weather forcast for her locaion and never miss out on the needful that counts. Also, this app will help other be able to look up any location and get real time weather forcast as desired to make life better and easily adaptable in all weather.

1. Project Overview:
    * Develop a weather application using React framework.
    * Utilize weather APIs to fetch real-time weather data.
    * Implement user-friendly UI/UX design for easy navigation.
    * Provide features like current weather, forecast, and location-based search.

2. Project Setup:
    * Set up a new React project using Create React App or similar tool.
    * Initialize version control using Git and create a repository on a * platform like GitHub.
    * Choose a weather API provider (e.g., OpenWeatherMap, WeatherAPI, etc.) and sign up for an API key.

3. Design and Planning:
    * Design wireframes and UI mockups for the application.
    * Plan component structure and state management using React hooks (e.g., useState, useEffect).
    * Define data flow for fetching weather data from the API and updating UI accordingly.

4. Development Phases:

### Phase 1: Setting Up Basic Structure
    * Create main components: App, Header, CurrentWeather, Forecast, etc.
    * Implement basic layout and styling using CSS or CSS frameworks like Bootstrap.

### Phase 2: Integrating Weather API
    * Set up API requests using Fetch or Axios.
    * Fetch current weather data based on user's location or predefined location.
    * Display fetched data on the UI.

### Phase 3: User Interaction
    * Implement search functionality to allow users to search for weather in different locations.
    * Add functionality to toggle between current weather and forecast views.

### Phase 4: Enhancements and Optimization
    * Optimize application performance by minimizing API calls and using caching where applicable.
    * Enhance UI/UX with animations, transitions, and responsive design.
    * Implement additional features like unit conversion (e.g., Celsius to Fahrenheit).

### Phase 5: Testing and Debugging
    * Conduct unit tests for critical components and functionality.
    * Perform cross-browser testing to ensure compatibility.
    * Debug and fix any issues reported during testing.

##### Issues Faced
* weather app is unable to fetch weather for other locations
        Fix:
        Handling Form Submission: Ensure that submitCity function is properly called when the user submits the form (presses Enter).

        State Update: Update the place state with the input value when the user submits a city name.

        Effect Dependency: Make sure that the effect fetching weather data is triggered whenever the place state changes.

* Unsolved problems.
        When the temperature unit is change the converted unit tend to overflow - jeeds to be adjusted

        The unit when converted fron celcius to farenheith it does not chenge fro C to F and it supposed to.

        Am having forcast not available when weekly forcast is displayed for a certain day

5. Deployment and Maintenance:
    * Deploy the application to a hosting platform like Netlify, Vercel, or GitHub Pages.
    * Set up continuous integration/continuous deployment (CI/CD) pipelines if necessary.
    * Monitor application performance and user feedback for improvements.
    * Regularly update dependencies and address any security vulnerabilities.

6. Documentation:
    * Document installation instructions and usage guidelines for developers.
    * Provide API documentation and information about any external libraries or tools used.
    * Write a README file with project overview, setup instructions, and other relevant details.

7. Future Enhancements:
    * Implement additional features such as weather alerts, historical weather data, or personalized user settings.
    * Explore integration with geolocation services for more accurate location detection.
    * Consider adding support for multiple languages and internationalization (i18n).
    * Gather user feedback and prioritize feature requests for future updates.

8. Conclusion:
    * Regularly maintain and update the application to ensure it remains functional and relevant to users.
    * Foster community engagement by accepting contributions and feedback from other developers.
    * Continuously evaluate and incorporate new technologies or best practices to improve the application over time.

## Resources
* Tailwind CSS : https://tailwindcss.com/docs/guides/vite
* Project API Source: Rapid API: https://rapidapi.com/visual-crossing-corporation-visual-crossing-corporation-default/api/visual-crossing-weather
* Glass Card blur: https://css.glass 
* React Documentation: https://reactjs.org/
* Create React App: https://create-react-app.dev/
* Icons: https://www.flaticon.com/search?type=icon&search-group=all&word=windy&license=&color=orange&shape=&current_section=&author_id=&pack_id=&family_id=&style_id=&type=


This vite template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Author
Eric (Mansa) Marah