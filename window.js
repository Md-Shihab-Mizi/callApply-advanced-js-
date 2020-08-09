var name = "sumaiya";

function add(num1, num2){
    var result = num1 + num2;
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}
var sum = add(5, 10);
console.log(sum);
console.log(result);