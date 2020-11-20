var badwords = ["clear","water","tires"];
var count;
function myevaluate(){
    count = 0;
    var text = "";
    text = document.getElementById("sent").value;
    var words = [];
    words = text.split(" ");
    for(var i = 0; i < badwords.length; i++) {
        for(let j = 0; j < words.length; j++){
            if(words[j] == badwords[i]) {
                count++;
            }
        }
    }
    if (count == 0) {
        document.querySelector(".message").innerHTML = "No bad word found";
    }
    else {
        document.querySelector(".message").innerHTML = "Bad word found<br>Total bad words : " + count;
    }
    document.getElementById("sent").value = "";
};

