
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


var modalImgs = [...document.querySelectorAll(".bookCover")];
modalImgs.forEach(function(img){
  img.onclick = function() {
    var modal = img.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}

