
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

//gets all the elements with the class bookCover and assigns it to the variable modalImgs
var modalImgs = [...document.querySelectorAll(".bookCover")];
modalImgs.forEach(function(img){    //for each modalImg...
  img.onclick = function() {        //when it's clicked
    var modal = img.getAttribute('data-modal');     //get the value of the data attribute. this is assigned to the correct book modal. sets it to the variable modal
    document.getElementById(modal).style.display = "block";     //enables the correct modal
  }
});

//does the same as above 
var modalList = [...document.querySelectorAll(".bookList")];
modalList.forEach(function(img){
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

//var span1 = document.getElementsByClassName("close")[0];
//var modal1 = document.getElementById('myModal1');
//var img1 = document.getElementById('myImg1');
//
//img1.onclick = function() {
//    modal1.style.display = "block";
//}
//
//span1.onclick = function() {
//    modal1.style.display = "none";
//}
//
//window.onclick = function(event) {
//    if(event.target == modal1) {
//        modal1.style.display = "none";
//    }
//}

//var span2 = document.getElementsByClassName("close")[0];
//var modal2 = document.getElementById('myModal2');
//var img2 = document.getElementById('myImg2');
//
//img2.onclick = function() {
//    modal2.style.display = "block";
//}
//
//span2.onclick = function() {
//    modal2.style.display = "none";
//}
//
//window.onclick = function(event) {
//    if(event.target == modal2) {
//        modal2.style.display = "none";
//    }
//}
//
//var span3 = document.getElementsByClassName("close")[0];
//var modal3 = document.getElementById('myModal3');
//var img3 = document.getElementById('myImg3');
//
//img3.onclick = function() {
//    modal3.style.display = "block";
//}
//
//span3.onclick = function() {
//    modal3.style.display = "none";
//}
//
//window.onclick = function(event) {
//    if(event.target == modal3) {
//        modal3.style.display = "none";
//    }
//}
//
