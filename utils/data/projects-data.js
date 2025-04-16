import qtripDynamic from "/public/image/qtripDynamic.png";
import weatherApp from "/public/image/weatherApp.png";

export const projectsData = [

  {
    id: 1,
    name: "Weather App",
    description: [
      "Developed a geolocation-based web application that displays real-time weather information, including temperature, humidity, wind speed, and dynamic weather descriptions with changing icons for an interactive user experience.",
      "Integrated a comprehensive search feature allowing users to access weather data for thousands of cities, powered by the OpenWeather API for reliable and up-to-date results.",
      "Achieved a fully loaded time of 571 ms and secured a perfect GTmetrix Performance score of 100, demonstrating exceptional optimization and responsiveness.",
    ],
    code: "https://github.com/Sudheesh59/WeatherApp",
    demo: "https://weather-app-iota-black-19.vercel.app/",
    image: weatherApp,
  },
  {
    id: 2,
    name: "Qtrip Dynamic",
    description: [
      "Developed a dynamic travel booking platform showcasing over 50 adventure options across 8+ cities, enabling seamless exploration and booking functionality for users.",
      "Engineered and styled four interactive web pages using HTML, CSS, Bootstrap, and JavaScript DOM manipulation, achieving a 40% boost in page interaction rates and user activity.",
      "Implemented LocalStorage for client-side persistence of user preferences, optimizing the page load time to 1.18 seconds for a faster, personalized experience. Integrated interactive carousels and multiple filtering options, enhancing user engagement by 35% and providing an intuitive browsing experience. ",
    ],
    code: "https://github.com/Sudheesh59/QTrip",
    demo: "https://q-trip-one.vercel.app/",
    image: qtripDynamic,
  },
];
