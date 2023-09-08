// Foo Bar refers to US army lingo that = "Fucked up beyond all recognition."

// 1. Takes an integer as an input.
// 2. if (int) modulus 3 is equal to 0, return strign Foo
// 3. else if (int) int is modulus 5 is equal to 0 return string Bar 
// 4. else if both 2. and 3. are truthy, return string FooBar
// 5. else (int) is not divisible by three or five return the variable storing the integer.

// NOTE: For testing
    // - export the function that you are interested in testing.
    // CRUCIAL: exports should be defined after data is declared.

// Old way of exporting data (Common JS)
// module.exports = {
//     int,
//     fooOrBar
// }

// UPDATED: ES6 way to export the data.
let int = 9;

function fooOrBar(int) {
    if (int % 3 === 0) {
        return "Foo";
    } else if (int % 5 === 0) {
        return "Bar";
    } else if (int % 3 === 0 && int % 5 === 0) {
        return "FooBar"
    }
    else {
        return int;
    }
}

fooOrBar();

export { int, fooOrBar}