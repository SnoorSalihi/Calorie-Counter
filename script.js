var calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;
function cleanInputString(str) {
    //console.log("original string: ", str)  
    /*Regex can also take specific flags to alter the pattern matching behavior. 
    Flags are added after the closing /. The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match.*/
    const regex = /[+-\s]/g;
    return str.replace(regex, "");

 }
 //console.log(cleanInputString("+-99"))
 
 function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
  }
  //console.log(isInvalidInput("1e3"));
  function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll();
 }