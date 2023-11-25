function convertToUSD() {
    //get CAD amount
    const cadAmount = document.getElementById('input').value;
    //input validation
    if (!cadAmount || isNaN(cadAmount)) {
        alert('Please enter a valid number for CAD.');
        return;
    }
    const exchangeRate = 0.73; 
    //calculate USD amount
    const usdAmount = cadAmount * exchangeRate;
    //display the amount in the output element
    document.getElementById("output").value=usdAmount.toFixed(3);
}

function convertToCAD() {
    //get usd amount
    const usdAmount = document.getElementById('input').value;
    //input validation
    if (!usdAmount || isNaN(usdAmount)) {
        alert('Please enter a valid number for USD.');
        return;
    }
    const exchangeRate = 1.37; 
    //calculate cad amount
    const cadAmount = usdAmount * exchangeRate;
    //display the amount in the output element
    document.getElementById("output").value=cadAmount.toFixed(3);
}

//function to check the conversion between currency
function convert(){
    //getting the input and output currency types
    const inpCurr = document.getElementById('amount').value;
    const outCurr = document.getElementById('convertedTo').value;
    //calling necessary functions based of the conditions
    if(inpCurr === "USD" && outCurr === "CAD"){
        convertToCAD();
    }
    else if (outCurr === "USD" && inpCurr === "CAD"){
        convertToUSD();
    }
    else{
        alert("Invalid conversion");
    }
}