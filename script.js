const api = {
    key: "2fa73590fd8b5a4c6e68098ad5625395",
    base: "https://api.openweathermap.org/data/2.5/"
  };
  
  // Select the elements from the HTML
  const searchInput = document.querySelector('.search input');
  const locationElement = document.querySelector('.card-header span:nth-child(1)');
  const dateElement = document.querySelector('.card-header span:nth-child(2)');
  const temperatureElement = document.querySelector('.temp');
  
  // Event listener for the search input
  searchInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      // Fetch the weather data based on the user's input
      fetch(`${api.base}weather?q=${searchInput.value}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(data => {
          // Update the HTML with the retrieved data
          locationElement.textContent = `${data.name}, ${data.sys.country}`;
          dateElement.textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
          temperatureElement.textContent = `${Math.round(data.main.temp)}°`;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });
  