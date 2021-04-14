const express = require('express')
const router = express.Router()
const Tasks = require('../models/tasks')

// Getting all tasks
router.get('/', async (req,res)=>{
    try {
        const tasks = await Tasks.find()
        res.json(tasks)
    } catch (err){res.status(500).json({ message: err.message})}
})
// Get one
router.get('/:id', getTask, (req,res)=>{
    res.send(res.task)
})
// Creating one
router.post('/', async (req,res)=>{
    const tasks = new Tasks({
        name: req.body.name,
        taskTitle: req.body.taskTitle,
        taskDescription: req.body.taskDescription,
        subTasks: req.body.subTasks
    })

    try{
        const newTask = await tasks.save()
        res.status(201).json(newTask)
    }catch(err){res.status(400).json({ message: err.message})}
})
// Update one
router.patch('/:id', (req,res)=>{})
// Delete
router.delete('/:id', (req,res)=>{})

async function getTask(req, res, next){
    let task;
    try{
        task = await Tasks.findById(req.params.id)
        if(task == null){return status(404).json({ message: "Cannot find task" })}
    } catch (err){res.status(500).json({ message: err.message})}
    
    res.task = task
    next()
}



module.exports = router