import { useState } from "react"
import styles from "./AddTask.module.css"

export function AddTask({ addTask }){
    const [taskName, setTaskName] = useState("")

    return (
    <div className={styles.addTask}>
        <input className={styles.taskInput} type="text" placeholder="Task name" onChange={(e) =>setTaskName(e.target.value)}/>
        <button className={styles.addTaskBtn} onClick={() => {if (taskName !== ""){addTask(taskName)}}}>Add</button>
    </div>)
}