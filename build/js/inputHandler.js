function checkTitle(){
    const title = document.querySelectorAll("[taskInput=true]"),
          titleCont = document.querySelectorAll("[taskContainer=true]");
    for(let i = 0; i < title.length; i++){
        if(title[i].value != "") titleCont[i].classList.add("changed");
        else titleCont[i].classList.remove("changed");
    }
}

function inputChange(){
    checkTitle();
}

