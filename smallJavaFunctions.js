function startswith(element,searchWord){
    return element.startsWith(searchWord);

}

function find_country(named_list, searchWord){

    var flitered_list = named_list.filter(x => startswith(x,searchWord))

    filteredItems.forEach(item => ulElement.appendChild(item)); //sjekk ut denne
}