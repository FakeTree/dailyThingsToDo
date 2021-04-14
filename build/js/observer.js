document.getElementById("createNewElement").onclick = ()=>{
    var template = document.getElementById("unsignedContainer");
    var content = template.content.cloneNode(true);
    document.getElementById("signedItem").appendChild(content);
}

document.getElementById("createNewElement").onclick = ()=>{
    var template = document.getElementById("unsignedContainer");
    var content = template.content.cloneNode(true);
    document.getElementById("signedItem").appendChild(content);
}