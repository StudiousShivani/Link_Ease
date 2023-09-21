let myLeads = [ ]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

// saving the leads to screen itself
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
   myLeads = leadsFromLocalStorage
   renderLead()
}

// deleting evrything saved
deleteBtn.addEventListener("click" ,function(){
   // console.log("double clicked")
   alert("Warning, You are about to delete everything permanently!!!!!!!!!!")
   localStorage.clear()
   myLeads = []
   renderLead()
})
  
// ********** event listener method*************

inputBtn.addEventListener("click", function(){
   myLeads.push(inputEl.value)
   inputEl.value = " "
   // saving leads to localstorage
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   renderLead()  
   console.log(localStorage.getItem("myLeads"))
})

function renderLead(){

let listItems = ' '
for(let i = 0; i < myLeads.length; i++){
   // listItems += "<li> <a href='https://www.google.com/' target='_blank' >" + myLeads[i] + "</a> </li>"  
      listItems += 
    `<li> 
         <a target='_blank' href='${myLeads[i]}' > ${myLeads[i]}
         </a>
    </li>`
}
ulEl.innerHTML = listItems
}

