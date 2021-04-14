document.getElementById("createNewElement").onclick = ()=>{
    const template = document.getElementById("unsignedContainer");
    const content = template.content.cloneNode(true);
    const location = document.getElementById("signedItem");
    location.append(content);
    
    // Set's the taskNum to the ID of the task
    let count = location.childElementCount-1;
    let childElement = location.children[count];
    childElement.setAttribute("taskNum", count);
    childElement.children[1].id = "subTaskContainerValue" + count;
    childElement.children[0].id = "taskContainerValue" + count;
    childElement.children[0].onclick = ()=>{openSubTasks(count)};
    childElement.children[0].children[2].onclick = ()=>{createSubTask(count)};
}

function openSubTasks(taskValue){
    //console.log(`document.getElementById(subTaskContainerValue${taskValue});`);
    let location = document.getElementById("subTaskContainerValue"+taskValue);
    location.classList.add("openSubTasks");
}

function createSubTask(taskValue){
    const template = document.getElementById("unsignedSubItem")
    const content = template.content.cloneNode(true)
    let location = document.getElementById("subTaskContainerValue"+taskValue);

    location.append(content)

    // Set's the subTaskNum to the ID of the sub task
    let count = location.childElementCount-1;
    location.children[count].setAttribute("subTaskNum", count);
}