const country = document.querySelector("#country");
const viewBtn = document.querySelector("button");
const flagImage = document.querySelector("img");

viewBtn.addEventListener("click", showFlag);
flagImage.classList.add("hide");

function showFlag() {
  let countryName = country.value;
  fetchCountryData(countryName);
  setTimeout(() => {
    flagImage.classList.remove("hide");
  }, 1000);
}

async function fetchCountryData(country) {
  const res = await fetch(
    `https://countryinfoapi.com/api/countries/name/${country}`
  );
  const data = await res.json();
  displayFlagFromData(data);
}

function displayFlagFromData(data) {
  flagImage.src = data.flag;
}
