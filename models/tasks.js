const mongoose = require('mongoose')

const subTaskSchema = new mongoose.Schema(
    {
        subTasksID: {
            type: String,
            required: true,
        },
        subTasksName: {
            type: String,
            required: false,
        },
        subTasksDescription: {
            type: String,
            required: false,
        },
        subTasksChecked: {
            type: Boolean,
            required: false,
        }
    })

const tasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    taskTitle: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    subTasks: [subTaskSchema]
})

module.exports = mongoose.model('Task', tasksSchema)