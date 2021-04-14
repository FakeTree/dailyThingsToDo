function checkTitle(){
    const title = document.getElementById("title"),
          titleCont = document.getElementById("titleContainer");
    if(title.value != "") titleCont.classList.add("changed");
    else titleCont.classList.remove("changed");
}

function checkText(){
    const text = document.getElementById("text"),
          textCont = document.getElementById("textContainer");
    if(text.value != "") textCont.classList.add("changed");
    else textCont.classList.remove("changed");
}

function inputChange(){
    checkTitle();
    checkText();
}

