import styles from "./Tasks.module.css"
import { Task } from "../Task/Task"

export function Tasks({ tasks, deleteTask, toggleTaskCompleted, taskSearch }) {
    return (
    <div className={styles.tasks}>
        {tasks.filter(taskSearch).map(task => <Task task={task} deleteTask={() => deleteTask(task.id)} toggleTaskCompleted={() => toggleTaskCompleted(task.id)}/>)}
    </div>)
}