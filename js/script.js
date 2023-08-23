// Business Logic
$(document).ready(function() {
  $("#convertBtn").click(function() {
    const inputNumber = parseInt($("#inputNumber").val());
    const romanNumeral = intToRoman(inputNumber);
    $("#result").text(romanNumeral);
  });
});

function intToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  if (num < 1 || num > 3999) {
    return "Number out of range (1-3999)";
  }

  let roman = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return roman;
}