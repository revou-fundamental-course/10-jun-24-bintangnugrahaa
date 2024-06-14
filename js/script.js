let lastConversion = "CtoF"; // Initialize to track the last conversion type

function convertToFahrenheit() {
  const celsiusInput = document.getElementById("celsius").value;
  if (celsiusInput === "") {
    return; // Do nothing if the input is empty
  }
  const celsius = parseFloat(celsiusInput);
  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
  lastConversion = "CtoF";
  updateCalculation(celsius, fahrenheit, "C");
}

function convertToCelsius() {
  const fahrenheitInput = document.getElementById("fahrenheit").value;
  if (fahrenheitInput === "") {
    return; // Do nothing if the input is empty
  }
  const fahrenheit = parseFloat(fahrenheitInput);
  const celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsius").value = celsius;
  lastConversion = "FtoC";
  updateCalculation(fahrenheit, celsius, "F");
}

function resetInput() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation-text").textContent = ""; // Clear calculation display
  lastConversion = "CtoF"; // Reset the last conversion type
}

function reverseConversion() {
  const celsiusInput = document.getElementById("celsius").value;
  const fahrenheitInput = document.getElementById("fahrenheit").value;

  if (lastConversion === "CtoF" && fahrenheitInput !== "") {
    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    updateCalculation(fahrenheit, celsius, "F");
    lastConversion = "FtoC";
  } else if (lastConversion === "FtoC" && celsiusInput !== "") {
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9) / 5 + 32;
    updateCalculation(celsius, fahrenheit, "C");
    lastConversion = "CtoF";
  }
}

function updateCalculation(input, output, unit) {
  const calculationText = document.getElementById("calculation-text");
  if (input === 0 && output === 0) {
    calculationText.textContent = ""; // Clear calculation text if input and output are zero
  } else {
    if (unit === "C") {
      calculationText.textContent = `${input}°C * (9/5) + 32 = ${output}°F`;
    } else if (unit === "F") {
      calculationText.textContent = `${input}°F - 32 * (5/9) = ${output}°C`;
    }
  }
}
