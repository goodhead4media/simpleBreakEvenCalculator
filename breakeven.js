/* Break-Even.js */

// There are only two functions that interact with the page: getNumbers() and output();
function getNumbers() {
     return {
        "survival": $("#txtSurvival").val(),
         "product": $("#txtProduct").val()
    };
}
 
// Divides the product cost by the survival budget
function calc(nums) {
    return (nums.survival / nums.product);
}
 
function output(result) {
    $("#lblResult").html("The number of products you'd have to produce in the year is: <br/>" + result);
}
 
