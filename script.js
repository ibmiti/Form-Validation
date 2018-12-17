function validate() {                               // start of function
  var n1 =                                          // creating n1 variable
  document.getElementById('num1');                  // selecting the num1 id
  var n2 =                                          // creating n2 variable
  document.getElementById("num2");                  // selecting the num 2 id
  if(n1.value != "" n2.value != ""){                // beginning of the form validation, checking the values and if they are empty or filled out
    if(n1.value == n2.value) {                      //  checking if n1 and n2 have values entered if so.... ( see next line )
      return true;                                  // return true
    }
  }
  alert("The values should be equal and not blank");// if it is not filled out return false and also this alert message 
  return false;
}


// ultimately we return true only when the values are not blank and are equal
// the form will not get submitted if its onsubmit event returns false
// never rely on html5 and javascript for secure form validation they can both be disabled. always validate your forms on the server side
