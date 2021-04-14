const taskElements = (()=>{
    fetch('/tasks',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res=> res.json()).then(data=>{
        console.log(data)
    })
})()