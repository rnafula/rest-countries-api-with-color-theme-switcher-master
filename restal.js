async function fetchData() {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  console.log(data);

  data.slice(20, 40).forEach((country) => {
    let container = document.querySelector(".home-countries");

    container.innerHTML += `
        <div class="country-container">
            <img src="${country.flags.svg}" alt="flag" width="100" height="100"><br>
            <h2>${country.name.common}</h2>
            <span>${country.capital[0]}</span><br>
            <span> ${country.population} </span><br>
        </div>
          `;

    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "100%";
  });
}

let container = document.querySelector(".home-countries");
fetchData();
