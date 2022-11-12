

//if u dw to write onclick in html can write like that
let myLeads = [];
const inputEl = document.getElementById("input-el") ;
const inputBtn = document.getElementById("input-btn") ;
const clearBtn = document.getElementById("clear-btn") ;
const ulEl = document.getElementById("ul-el") ;

//localStorage.setItem("myLeads","https://www.youtube.com/watch?v=jS4aFq5-91M&t=20551s");
//console.log(localStorage.getItem("myLeads")) ;
//localStorage.clear() ;
//console.log(typeof myLeads) ;

//localStorage.setItem("myLink", JSON.stringify(myLeads)) ;

let dog = JSON.parse(localStorage.getItem("myLink")) ;
console.log(Boolean(dog))

if(dog){
    myLeads = dog ;    
    console.log(Boolean(dog))
    //if this is a truthy value
    showlist() ;
}



clearBtn.addEventListener("click", function(){
    localStorage.clear() ;
    myLeads = [] ;
    ulEl.innerHTML = " "
    //showlist() ;
    console.log("test clear button");
})



inputBtn.addEventListener("click", function(){             //when the save button is clicked do this
    console.log("button clicked") ;
    myLeads.push(inputEl.value);
    console.log(myLeads);
    console.log(myLeads.length);
    inputEl.value = " " ;
    showlist();
    localStorage.setItem("myLink", JSON.stringify(myLeads)) ;
    //console.log(JSON.parse(localStorage.getItem("myLink"))) ;
})




  
function showlist(){

    let ulList = " "; 
    for( let i =0; i<myLeads.length; i++)
    {

        ulList += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>` ;
        ulEl.innerHTML = ulList;//use innerHtml to insert html tags in js code
        //alternative way

        /*const li = document.createElement("li")
        li.textContent = myLeads[i] ;
        ulEl.append(li) ;*/
       
    }
}

