function FilteringBooks() {
    var UserInput, Filter, ul, list, o, counter, ValueOfText;
    
    UserInput = document.getElementById('myBooks');
    Filter = UserInput.value.toUpperCase();
    ul = document.getElementById("myUL");
    list = ul.getElementsByTagName('list');
    
    for (counter = 0; counter < list.length; counter++) {
        
        o = list[counter].getElementsByTagName("a")[0];
        ValueOfText = o.textContent || o.innerText;
        
        if (ValueOfText.toUpperCase().indexOf(Filter) > -1) {
            list[counter].style.display = "";
        } else {
            list[counter].style.display = "none";
        }
    }
}
