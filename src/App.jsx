import './App.css'
import { Search, Tasks, CheckAll, TaskFilter, AddTask } from './components/components'
import { useState } from 'react'

const tasksList = [{id: 0, name: "Finish React Screencast", isCompleted: true }, {id: 1, name: "Take over world", isCompleted: false }]


export function App() {
  const [tasks , setTasks] = useState(tasksList)
  const [searchString, setSearchString] = useState("")
  const [taskFilters, setTaskFilters] = useState([true, false, false])

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(task => task.id != id))
  }

  const toggleTaskCompleted = (id) => {
    setTasks((prev) => prev.map(task => task.id == id ? {...task, isCompleted: !task.isCompleted}: task))
  }

  const toggleAll = (isCheckedAll) => {
    setTasks((prev) => prev.map((task) => {
      return {...task, isCompleted: isCheckedAll}
    }))
  }

  const filterTasks = (taskFilter) => {
    if (taskFilter[1]) {
      return tasks.filter(task => !task.isCompleted);
    }
    else if(taskFilter[2]) {
      return tasks.filter(task => task.isCompleted)
    }

    return tasks
  }

  const toggleFilter = (i) => {
    setTaskFilters(taskFilters.map((prev, index) => i === index))
  }

  const tasksLeft = () => {
    return tasks.filter((task) => !task.isCompleted).length
  }

  const taskSearch = (task) => {
    return task.name.toLowerCase().includes(searchString.toLowerCase()) || searchString === "";
  }

  const changeSearchString = (string) => {
    setSearchString(string);
  }

  const addTask = (name) => {
    let newTasks = tasks.slice(0)
    newTasks.sort((a, b) => a.id - b.id)
    newTasks.push({id: newTasks[newTasks.length - 1].id + 1, name: name, isCompleted: false})
    setTasks(newTasks)
  }

  return (
    <div className="block">
      <Search searchString={searchString} changeSearchString={changeSearchString}/>
      <AddTask addTask={addTask}/>
      <Tasks tasks={filterTasks(taskFilters)} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} taskSearch={taskSearch}/>
      <CheckAll toggleAll={toggleAll} tasksLeft={tasksLeft}/>
      <TaskFilter toggleFilter={toggleFilter} taskFilters={taskFilters}/>
    </div>
  )
}