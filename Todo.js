const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("List-container");

function AddTask(){
    if(inputBox.Value === ''){
        alert("You did not add what to do!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false );

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();