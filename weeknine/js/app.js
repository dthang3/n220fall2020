function calc() {
    let bill = Number(document.getElementById('bill').value);
    let tip = bill * .15;
    let total_bill = bill + tip;

    document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
    document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);         
}