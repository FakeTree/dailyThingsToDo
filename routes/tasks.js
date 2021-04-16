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
    res.json(res.task);
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
router.patch('/:id', getTask, async (req,res)=>{
    if(req.body.name!= null){
        res.task.name = req.body.name;
    }
    if(req.body.taskTitle!= null){
        res.task.taskTitle = req.body.taskTitle;
    }
    if(req.body.taskDescription!= null){
        res.task.taskDescription = req.body.taskDescription;
    }
    if(req.body.subTasks?.subTasksID!= null){
        res.task.subTasks.subTasksID = req.body.subTasks.subTasksID;
    }
    if(req.body.subTasks?.subTasksName!= null){
        res.task.subTasks.subTasksName = req.body.subTasks.subTasksName;
    }
    if(req.body.subTasks?.subTasksDescription!= null){
        res.task.subTasks.subTasksDescription = req.body.subTasks.subTasksDescription;
    }
    if(req.body.subTasks?.subTasksChecked!= null){
        res.task.subTasks.subTasksChecked = req.body.subTasks.subTasksChecked;
    }

    try{
        const updateTask = await res.task.save()
        res.json(updateTask)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})

// Delete
router.delete('/:id', getTask, async (req,res)=>{
    try{
        await res.task.remove()
        res.json({ message: "deleted task" })
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})

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