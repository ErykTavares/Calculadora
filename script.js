function calcular(){
    let select= document.getElementById("operation");
    let operation = select.options[select.selectedIndex].value;
    
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var result = null;
    switch(operation){
        case "1":
            result = num1 + num2;
            break;
        case "2":
            result = num1 - num2;
            break;
        case "3":
            result = num1 * num2;
            break;
        case "4":
            result = num1 / num2;
            
            break;
    }
    console.log(result)
    document.getElementById("result").value = result;
}