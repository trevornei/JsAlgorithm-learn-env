/*
The foo bar problem is a coding challenge that is often used as an interview question for software engineers. The problem is to write a function that takes an integer as input and returns the string "Foo" if the integer is divisible by 3, "Bar" if the integer is divisible by 5, or the integer itself if it is not divisible by 3 or 5.
*/

// Foo Bar refers to US army lingo that = "Fucked up beyond all recognition."

// 1. Takes an integer as an input.
// 2. if (int) / 3 return strign foo
// 3. else if (int) int is / 5 return string bar 
// 4. else (int) is not divisible by three or five return the variable storing the integer.

let int = 9;

function fooOrBar(int) {
    if (int % 3 === 0) {
        return "Foo";
    } else if (int % 5 === 0) {
        return "Bar";
    } else {
        return int;
    }
}

fooOrBar();

