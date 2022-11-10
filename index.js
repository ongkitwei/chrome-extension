

//if u dw to write onclick in html can write like that
let myLeads = [];
const inputEl = document.getElementById("input-el") ;
const inputBtn = document.getElementById("input-btn") ;
const ulEl = document.getElementById("ul-el") ;


inputBtn.addEventListener("click", function(){             //when the save button is clicked do this
    console.log("button clicked") ;
    myLeads.push(inputEl.value);
    console.log(myLeads);
    console.log(myLeads.length);
    inputEl.value = " " ;
    showlist();
})


function showlist(){
    
    let ulList = " "; 
    for( let i =0; i<myLeads.length; i++)
{
    //console.log(myLeads[i])
    ulList += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>` ;
    ulEl.innerHTML = ulList;//use innerHtml to insert html tags in js code
    //alternative way

    /*const li = document.createElement("li")
    li.textContent = myLeads[i] ;
    ulEl.append(li) ;*/
    
}
}

