var text = document.getElementById("text");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var div7 = document.getElementById("div7");
var div8 = document.getElementById("div8");
var div9 = document.getElementById("div9");
var result = document.getElementById("result");
var parent = document.getElementById("ticTac");
var counter = 0;
var x = 0;
var o = 0;


function cheking(a) {
    if (counter % 2 == 0) {
        text.innerHTML = "player's move O";
        a.style.pointerEvents = "none";
        a.childNodes[0].innerHTML = "X";
        a.childNodes[0].style.color = "brown";
        counter = counter + 1;
        check("X");
    } else {
        text.innerHTML = "player's move X";
        a.style.pointerEvents = "none";
        a.childNodes[0].innerHTML = "O";
        a.childNodes[0].style.color = "darkcyan";
        counter = counter + 1;
        check("O");
    }

}

function check(y) {
    if (div1.childNodes[0].innerHTML == y && div2.childNodes[0].innerHTML == y && div3.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div1, div2, div3, y);
    } else if (div4.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div6.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div4, div5, div6, y);

    } else if (div7.childNodes[0].innerHTML == y && div8.childNodes[0].innerHTML == y && div9.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div7, div8, div9, y);

    } else if (div1.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div9.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div1, div5, div9, y);

    } else if (div7.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div3.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div7, div5, div3, y);

    } else if (div1.childNodes[0].innerHTML == y && div4.childNodes[0].innerHTML == y && div7.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div1, div4, div7, y);

    } else if (div2.childNodes[0].innerHTML == y && div5.childNodes[0].innerHTML == y && div8.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div2, div5, div8, y);

    } else if (div3.childNodes[0].innerHTML == y && div6.childNodes[0].innerHTML == y && div9.childNodes[0].innerHTML == y) {
        text.innerHTML = "Player " + y + " Won!";
        won(div3, div6, div9, y);

    }

}

function won(z, q, c, y) {

    z.style.backgroundColor = "#228b22b0";
    q.style.backgroundColor = "#228b22b0";
    c.style.backgroundColor = "#228b22b0";
    if (y == "X") {
        x = x + 1;
        result.innerHTML = "X:" + x + " / " + "O:" + o;

    } else {
        o = o + 1;
        result.innerHTML = "X:" + x + " / " + "O:" + o;
    }

    parent.style.pointerEvents = "none";

    setTimeout(function () {
        z.style.backgroundColor = "#228b2100";
        q.style.backgroundColor = "#228b2100";
        c.style.backgroundColor = "#228b2100";
        for (var i = 0; i < parent.childElementCount; i++){
            parent.children[i].style.pointerEvents = "auto";
            parent.children[i].children[0].innerHTML="";
        }
        parent.style.pointerEvents = "auto";
        text.innerHTML="Play Game"

    }, 2000);




}