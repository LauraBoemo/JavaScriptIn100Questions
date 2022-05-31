// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    if(str === ''){
        // Checking if it isn't an empty String.
        return '';
    } else {
        // Generating an Array of Strings spliting (.split — using 2 parameters ("-" and "_") with Regular Expression) the "str" String;
        let newStr = str.split(/[-_]+/);
        // Separating the first String of the "newStr" Array to apply the "first word" rule  — "Should be capitalized only if the original word was capitalized", wich means: it will never change;
        let first = newStr.shift();

        // Mapping (.map) the "newStr" Array (without the "first" String) to uppercase the first Char of the String and slicing it with the rest of the Chars in the String
        let upperNewStr = newStr.map(element => { 
                return element.charAt(0).toUpperCase() + element.slice(1);
            }
        );

        //  Concating the "first" String to all the Strings in the "upperNewStr" concated.
        let finalStr = first.concat(upperNewStr.join(''));

        return finalStr;
    }
}