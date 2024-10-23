let inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const conversionFactors = {
  meterToFeet: 3.281,
  literToGallon: 0.264,
  kiloToPound: 2.204,
};

function convertLength(value) {
  const toFeet = (value * conversionFactors.meterToFeet).toFixed(3);
  const toMeters = (value / conversionFactors.meterToFeet).toFixed(3);
  return `${value} meters = ${toFeet} feet | ${value} feet = ${toMeters} meters`;
}
function convertVolume(value) {
  const toGallons = (value * conversionFactors.literToGallon).toFixed(3);
  const toLiters = (value / conversionFactors.literToGallon).toFixed(3);
  return `${value} liters = ${toGallons} gallons | ${value} gallons = ${toLiters} liters`;
}
function convertMass(value) {
  const toPounds = (value * conversionFactors.kiloToPound).toFixed(3);
  const toKilos = (value / conversionFactors.kiloToPound).toFixed(3);
  return `${value} kilos = ${toPounds} pounds | ${value} pounds = ${toKilos} kilos`;
}

convertBtn.addEventListener("click", function () {
  let inputValue = parseFloat(inputEl.value);

  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
  } else {
    lengthEl.textContent = convertLength(inputValue);
    volumeEl.textContent = convertVolume(inputValue);
    massEl.textContent = convertMass(inputValue);
  }
});

const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", () => {
  const main = document.querySelector(".main");
  const section = document.querySelectorAll(".section");
  if (darkModeToggle.checked) {
    main.classList.add("dark-mode");
    section.forEach((sect) => {
      sect.classList.add("dark-mode");
    });
  } else {
    main.classList.remove("dark-mode");
    section.forEach((sect) => {
      sect.classList.remove("dark-mode");
    });
  }
});
