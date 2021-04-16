document.getElementById("createNewElement").onclick = () =>{
    createNewElement();  
} 

function createNewElement(loadedData = null, firstLoad = false){
    const template = document.getElementById("unsignedContainer");
    const content = template.content.cloneNode(true);
    const location = document.getElementById("signedItem");
    location.append(content);
    
    // Set's the taskNum to the ID of the task
    let count = location.childElementCount-1;
    let childElement = location.children[count];
    childElement.setAttribute("taskNum", count);
    let taskContainer = childElement.querySelectorAll("[id=taskMainHead]")[0];
    let taskSubContainer = childElement.querySelectorAll("[id=subTaskContainer]")[0];
    taskContainer.id = "taskContainerValue" + count;
    taskSubContainer.id = "subTaskContainerValue" + count;
    // On click on the task element, drop down the subtask menu
    childElement.onclick = (e)=>{
        e.stopPropagation();
        openSubTasks(count)
    };

    childElement.children[0].children[2].onclick = (e)=>{
        e.stopPropagation(); 
        createSubTask(count)
    };

    if(loadedData != null && firstLoad){
        const titleElem = taskContainer.querySelectorAll("[inputElem=Title]")[0]
        const descriptionElem = taskContainer.querySelectorAll("[inputElem=Description]")[0]
        
        titleElem.value = loadedData.taskTitle;
        descriptionElem.value = loadedData.taskDescription;
        
        for(let i = 0; i < loadedData.subTasks?.length; i++){
            createSubTask(count, loadedData.subTasks[i], true);
        }
    }
    inputChange()
}

function openSubTasks(taskValue){
    let location = document.getElementById("subTaskContainerValue"+taskValue);

    if(location.children.length == 0)   return
    let count = location.childElementCount-1;
    if(location.getAttribute("isOpen")!="true"){
        location.setAttribute("style", "height:"+(count+1)*6+"em;");
        console.log("open")
        location.setAttribute("isOpen","true");
    }
    else {
        location.setAttribute("style", "height:0;");
        console.log("close")
        location.setAttribute("isOpen","false");
    }
}

function createSubTask(taskValue, loadedData = null, firstLoad = false){
    const template = document.getElementById("unsignedSubItem")
    const content = template.content.cloneNode(true)
    let location = document.getElementById("subTaskContainerValue"+taskValue);
    
    location.append(content)
    // Set's the subTaskNum to the ID of the sub task
    let count = location.childElementCount-1;
    location.setAttribute("style", "--desired-height:"+(count+1)*6+"em;");
    location.setAttribute("childElements", count);
    location.children[count].setAttribute("subTaskNum", count);


    if(loadedData != null && firstLoad){
        let subTaskID = Number(loadedData.subTasksID);
        const titleElem = location.querySelectorAll("[inputElem=subTitle]")[subTaskID]
        const descriptionElem = location.querySelectorAll("[inputElem=subDescription]")[subTaskID]
        const checkElem = location.querySelectorAll("[inputElem=subCheck]")[subTaskID]
        const idElem = location.querySelectorAll("[inputElem=subID]")[subTaskID]

        titleElem.value = loadedData.subTasksName;
        descriptionElem.value = loadedData.subTasksDescription;
        if(loadedData.subTasksChecked){
            checkElem.checked = true;
        }
    }
    inputChange()
}