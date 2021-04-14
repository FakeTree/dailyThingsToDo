const mongoose = require('mongoose')

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
    subTasks: {
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
    }
})

module.exports = mongoose.model('Task', tasksSchema)