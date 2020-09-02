//A man buys a cycle for Rs. a and sells it at a loss of b%. What is the selling price of the cycle?
// Write a Function to compute the roundof selling price.

// Write a Function to return compute the doundof selling price.
function find_SellingPrice(a,b){
    let num1 =Math.floor(100-b);
    let num2 =Math.floor(a*num1);
    let sp = Math.round(num2/100);
    return sp;
}
//Use SpecRunner to check the Test Cases.
