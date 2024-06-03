/* 
    The % sign only can be used to determine 'X' numbers reminder by 'Y'. 
*/

// Declaring 'input' variable to store and manipulate the value of HTML-'input' tag.
let input = document.getElementById('input-box');

/* Declaring 'buttons'  variable to store all the HTML-'button' value using js-'querySelectorAll' method.
   Whitch accept perameter as HTML-Tag name. */
let buttons = document.querySelectorAll('button');

// Declaring a string with empty value. which will be used to store exprressions. 
let string = "";

// Declaring an array from all the values stored in the variable 'buttons'.
let button_array = Array.from(buttons);

//Adding funcitonality to Every button
button_array.forEach(button => {
    button.addEventListener('click', (e) =>{
        // If user clicks on '=' sign. whatever expression is available in the HTML-input section will be evaluated.
        // eval() function evaluates a string as mathemetical expression(if its logical with arithmatic operators).
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        // If user clicks on 'C' sign. HTML-input values will be replaced by an empty string.
        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string;
        }
        // If user clicks on 'X' sign. The HTML-inpout value string will reduce by one value from the rigth side.
        else if(e.target.innerHTML == 'X'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        // When user clicks on any buttons excepts 'C', 'X', '=' it sets the value of HTML-input and will be displayed in input section.
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});