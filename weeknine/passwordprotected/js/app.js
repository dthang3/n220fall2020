let username = document.querySelector("#username");
let password = document.querySelector("#password");
let dvOutput = document.querySelector("#dvOutput");

function newName() {
    if (username && password){
        dvOutput.innerHTML= "Success" 
    }
    else {
        dvOutput.innerHTML = "Wrong Information"
    }
}