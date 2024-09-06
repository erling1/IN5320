

function startswith(element,searchWord){
    
    return element.startsWith(searchWord);

}

let mystring = "hello, world"


/*
function find_country(named_list, searchWord){

    var filtered_list = named_list.filter(ele_named_list => startswith(ele_named_list,searchWord));

    var ulElement = document.getElementById('filtered-country-list');

    
    filtered_list.forEach(item => {

        var li_ele = document.createElement('li')

        li_ele.textContent = item
        
        ulElement.appendChild(li_ele)});
};
*/

function find_country_2(named_list, searchWord){

    console.log(named_list)
    console.log(searchWord)

    var original_list  = Array.from(named_list)
    var original_list_filtered = original_list.filter(item => startswith(item,searchWord));

    //document.getElementById("myBtn").addEventListener("click", displayDate);

    var new_list = document.getElementById('filtered-country-list')

    
    original_list_filtered.forEach(item => {
        var list_element = document.createElement('li')

        
        list_element.textContent = item
        new_list.appendChild(list_element)
    

    })
    

    return original_list_filtered

}

const europeanCountries = ["Germany", "France", "Italy", "Spain", "Germany", "Gerland", "germany"];

console.log(find_country_2(europeanCountries, 'Ger'))

