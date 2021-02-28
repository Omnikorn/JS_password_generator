// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // List of vasriable to be used in the function. 
  let bigCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var nums=["0","1","2","3","4","5","6","7","8","9"];
  var symb=["!","£","$","%","#","&","(",")","*","+"];
  let mutantArray=[];
  let finalPass=[];

  var q1=confirm( "Do you want to use uppercase?");
  if (q1 == true) {
    mutantArray = mutantArray.concat(bigCase);
    //console.log (mutantArray)
  };

  var q2=confirm("Do you want to use lowercase letters?");
  if (q2==true) {
    mutantArray = mutantArray.concat(lowerCase);
    //console.log(mutantArray);
  };

  var q3=confirm("Do you want to use numbers?");
  if (q3==true) {
    mutantArray = mutantArray.concat(nums);
    //console.log(mutantArray);
  };

var q4=confirm("Do you want to use special symbols?");
if (q4==true) {
  mutantArray=mutantArray.concat(symb);
  //console.log(mutantArray);
};

var passLength=prompt("How many charecters do you need in your password between 8 and 128");
if (passLength<8 || passLength >128) {
  alert("number of charecters is out of range");
} else {
  for (i=1; i < passLength; i++) {
    console.log(i);
    let newNum= Math.floor(Math.random() * mutantArray.length);
    console.log(newNum);
    let char = mutantArray[newNum];
    console.log(char);
    finalPass.push(char);
  }
  var winner= finalPass.join("");
  console.log ("final pass is " + winner);
  alert(" your final password is" + winner);
}










  // this is there code 
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
writePassword()

