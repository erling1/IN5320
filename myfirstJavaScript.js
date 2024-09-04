function AddCountry(country){

    // Fetch current list
    var ul = document.getElementById("country-list")

    //Create new list with new element
    var li = document.createElement("li")

    var country_textnode = document.createTextNode(country)
    //Creating textnode, and appending it to my list
    li.appendChild(country_textnode)
    //Appending the ordered list to the unordered list with id "country-list"
    ul.appendChild(li)

    //Putting delete button inside add-function 
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"
    deleteBtn.className = "delete-button"

    li.appendChild(deleteBtn)

    deleteBtn.onclick = function() {
        li.remove();
    };


    

    //return ul



}