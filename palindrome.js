function palindrome_checker() {
  var inputText = document.getElementById("userInput").value;
  var regEx = /[W\_]/g; //  regular Expression -> W -> [^A-Za-z0–9]/g  g for global search
  var lowercaseString = inputText.toLowerCase().replace(regEx, "");
  console.log(lowercaseString);
//   var step0 = lowercaseString.split("");
//   console.log(step0);
//   var step2 = lowercaseString.split("").reverse();
//   console.log(step2);
  var reverseLowercase = lowercaseString.split("").reverse().join("");
  console.log(reverseLowercase);


  if (lowercaseString == reverseLowercase) {
    document.getElementById("palindrome").innerHTML =
      "Dein Wort/Text ist ein Palindrome";
  } else {
    document.getElementById("palindrome").innerHTML =
      "Dein Wort/Text ist kein Palindrome";
  }
}
