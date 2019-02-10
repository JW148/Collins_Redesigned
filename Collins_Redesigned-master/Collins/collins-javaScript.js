
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

var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');

var span = document.getElementsByClassName("close")[0];

img.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}