

//if u dw to write onclick in html can write like that
let myLeads = ["www.awesomelead.com ", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el") ;
const inputBtn = document.getElementById("input-btn") ;
const ulEl = document.getElementById("ul-el") ;

inputBtn.addEventListener("click", function(){             //when the save button is clicked do this
    console.log("button clicked") ;
    myLeads.push(inputEl.value);
    console.log(myLeads);
})



for( let i =0; i<myLeads.length; i++)
{
    //console.log(myLeads[i])
    //ulEl.innerHTML = "<li>"  + myLeads[i] +  ulEl.innerHTML + "</li>" ;     //use innerHtml to insert html tags in js code
   
   


    //alternative way

    const li = document.createElement("li")
    li.textContent = myLeads[i] ;
    ulEl.append(li) ;
    console.log
}
