
function FilteringBooks() {
    var UserInput, Filter, ul, li, o, counter, ValueOfText;
    
    UserInput = document.getElementById('myBooks');
    Filter = UserInput.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    
    for (counter = 0; counter < li.length; counter++) {
        
        o = li[counter].getElementsByTagName("a")[0];
        ValueOfText = o.textContent || o.innerText;
        
        if (ValueOfText.toUpperCase().indexOf(Filter) > -1) {
            li[counter].style.display = "";
        } else {
            li[counter].style.display = "none";
        }
    }
}

var span = document.getElementsByClassName("close1")[0];
var modal1 = document.getElementById('myModal1');
var img1 = document.getElementById('myImg1');

img1.onclick = function() {
    modal1.style.display = "block";
}

span.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal1) {
        modal1.style.display = "none";
    }
}

var span = document.getElementsByClassName("close2")[0];
var modal2 = document.getElementById('myModal2');
var img2 = document.getElementById('myImg2');

img2.onclick = function() {
    modal2.style.display = "block";
}

span.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal2) {
        modal2.style.display = "none";
    }
}

var span = document.getElementsByClassName("close3")[0];
var modal3 = document.getElementById('myModal3');
var img3 = document.getElementById('myImg3');

img3.onclick = function() {
    modal3.style.display = "block";
}

span.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal3) {
        modal3.style.display = "none";
    }
}

