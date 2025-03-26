let data = [];
async function fetchData() {
  let response = await fetch("https://restcountries.com/v3.1/all");
  data = await response.json();
  console.log(data);
  displayCountries(data); //display all
}
// function to display filtered
function displayCountries(filteredCountries) {
  const container = document.querySelector(".home-countries");
  container.innerHTML = " "; //clears all existing content

  filteredCountries.forEach((country) => {
    container.innerHTML += `
        <div class="country-container">
            <img src="${country.flags.svg}" alt="flag" width="100" height="100"><br>
            <h2>${country.name.common}</h2>
            <span>${country.capital[0]}</span><br>
            <span> ${country.population} </span><br>
             <span> ${country.region} </span><br>
        </div>
          `;
  });
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "100%";
}

//Fuction to filter countries based on region
function filterCountriesByRegion(region) {
  if (region === "all") {
    displayCountries(data);
  } else {
    const filteredCountries = data.filter(
      (country) => country.region === region
    );
    displayCountries(filteredCountries);
  }
}
// event listener
document.getElementById("region-select").addEventListener("change", (event) => {
  filterCountriesByRegion(event.target.value);
});

function filterCountriesByInput(inputText) {
  // Filter the countries that include the input text (case-insensitive)
  const filteredCountries = data.filter((country) => {
    return country.name.common.toLowerCase().includes(inputText.toLowerCase());
  });

  // Display the filtered countries
  displayCountries(filteredCountries);
}

// Event listener for the input field
document.getElementById("country-input").addEventListener("input", (event) => {
  const inputText = event.target.value;
  filterCountriesByInput(inputText);
});

fetchData();

//for toggling between dark and light mode

const modeButton = document.querySelector(".mode-button");
modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
