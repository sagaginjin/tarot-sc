var future = 'd';

function startTarot() {
    for(var i = 0; i < 22; i++){
        var img = document.createElement("IMG");
        img.setAttribute("src", "./imgs/back.jpeg");
        img.setAttribute("class", "tarot-img");
        img.setAttribute("id", i);
        var num = document.createElement("P");
        num.innerHTML = i;
        document.getElementById("imgs-container").appendChild(num);
        document.getElementById("imgs-container").appendChild(img);
        document.getElementById(i).addEventListener("click", displayCard);
        document.getElementById("start-btn").disabled = true;
        document.getElementById("clue").style.display = "block";
    }
}

function displayCard(e) {
    document.getElementById(e.target.id).setAttribute("src", "./imgs/" + e.target.id + '.png');
    future += e.target.id;
    checkResults(future, e.target.id);
}

function refresh() {
    location.reload();
}

function checkResults(future, id) {
    var color = getComputedStyle(document.getElementById(id),null).getPropertyValue('border-left-color');
    hexToRgb('#' + future);
    if(hexToRgb('#' + future) == color) {
        document.getElementById("tarot-container").innerHTML = "<img src='./imgs/well-done.png'>";
        document.getElementById("imgs-container").style.visibility = 'hidden';
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgb(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ")" : null;
}