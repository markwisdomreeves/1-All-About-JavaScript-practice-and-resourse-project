// function addNumbers() {
//   var firstNumber = document.getElementById("fromAmount").value;
//   var secondNumber = document.getElementById("toAmount").value;

//   if (isNaN(secondNumber)) {
//     firstNumber.value = alert("Please enter a valid amount in the textbox");
//   }
// }

function convertCurrency() {
  //my api address and id variable
  let apiAddress =
    "http://data.fixer.io/api/latest?access_key=4046949d2ecddcb6ed473a2007fd9413&format=1";
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  // xmlhttp
  let xmlhttp = new XMLHttpRequest();
  let url = apiAddress + from + "," + to;

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      let result = xmlhttp.responseText;
      console.log(result)

      // parse the data to JSON object
      let jsResult = JSON.parse(result);
      let oneUnit = jsResult.rates[to] / jsResult.rates[from];
      let amt = document.getElementById("fromAmount").value;
      document.getElementById("toAmount").value = (oneUnit * amt).toFixed(2);
    }
  };
}
