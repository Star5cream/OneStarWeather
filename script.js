// By Soulis - This code does not have any elements displayed to the user, just Java pulling the info on the backend.

document.getElementById("getWeather").addEventListener("click", function() {
  let city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(city);
  }
});

function fetchWeather(city) {
  const apiKey = "ec09c8a543bc9c22a12c8059da826493"; // Use your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Display current weather data
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°F`;
      document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;

      // Display weather icon for current weather
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
      document.getElementById("weatherIcon").src = iconUrl;

      // Display encouragement message
      const encouragementMessages = [
        "You are OneStar! 🌟",
        "Get some sun in your life! ☀️",
        "Enjoy the day, no matter the weather. 🌈",
        "Soulis says get outside and soak up some sunshine! 🌞",
        "Weather’s looking good! I'm jealous 😎",
        "No need to be anyone else... be YOU! 💫"
      ];
      document.getElementById("encouragement").innerText = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
    })
    .catch(error => {
      console.error("Soulis couldn't fetch weather data: ", error);
      alert("Could not retrieve weather data mayne. Please try again.");
    });
}
