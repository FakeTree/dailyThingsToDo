const taskElements = (()=>{
    fetch('/tasks',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res=> res.json()).then(data=>{
        console.log(data)
        for(let i = 0; i < data.length; i++){
            createNewElement(data[i], true)
        }
    })
})()