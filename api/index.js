import express from 'express'
import cors from 'cors'

// GET /tasks - Retrieve all tasks.

// POST /tasks - Create a new task. A task should have at least a title (string) and a completed (boolean, default false).

// PUT /tasks/:id - Update a task's title and/or completed status.

// DELETE /tasks/:id - Delete a task by ID.


let id = 1
// let tasks = [{id:1, title:'test', completed:false}, {id:2, title:'test2', completed:true}]
let tasks = []

const app = express()
app.use(express.json())
app.use(cors())


app.get("/tasks", (req, res, next)=>{
    res.send(tasks)
})

app.post("/tasks", (req, res, next)=>{
    const {body} = req
    if(!body){
        res.status(404).send({message: 'Title and Completed properties are required'})
    }
    const {title, completed} = body
    if(!title || typeof title !== 'string'){
        res.status(404).send({message: 'Title is required and must be a string'})
    }
    
    const taskId = id
    id++
    const task = {id:taskId, title, completed: completed !== undefined? completed : false}
    tasks.push(task)

    res.send(task)
})

app.put("/tasks/:id", (req, res, next)=>{
    const id = Number(req.params?.id)

    const task = tasks.find((task)=> task.id === id)

    const {title, completed} = req.body
    if(title){
        task.title = title
    }
    if(completed !== undefined){
        task.completed = completed
    } 
    res.send(task)
})

app.delete("/tasks/:id", (req, res, next)=>{
    const id = Number(req.params?.id)

    const newTasks = tasks.filter(e=> e.id !==id)
    tasks = newTasks
    res.send(newTasks)
})


app.listen(3001, ()=>{
    console.log('listening on port 3001')
})