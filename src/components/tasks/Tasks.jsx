import React, {useState} from 'react'
import Task from '../task/Task'
function Tasks() {
  const initialTaks = [{
    id: 1,
    title: 'Créer un panier',
    body: "Coder la cretaion d'un panier",
    ti: 21,
    tr: 2,
  
  }, {
    id: 2,
    title: 'Connexion user',
    body: "Coder la connexion user",
    ti: 20,
    tr: 10,
  }]
  const [tasks, setTasks] = useState(initialTaks)
  const handleTRChange = ({id, tr}) => {
    
    const taskToSave = tasks.filter(task => task.id !== id);
    const filteredTasks = tasks.filter(task => task.id === id);
    const filteredTask = filteredTasks[0];
    
    setTasks([...taskToSave, {...filteredTask, tr}])
  }
  return (
    <div className="justify-center items-center flex tache bg-cyan-600 text-white">
      {tasks.map((task, key) => <Task task={task} onTRChange={handleTRChange} id={key}/>)}
    </div>
  )
}

export default Tasks