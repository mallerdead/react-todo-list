import styles from "./Task.module.css"

export function Task({ task, deleteTask, toggleTaskCompleted}) {
    return (
    <div className={styles.task}>
        <input type="checkbox" checked={task.isCompleted} onChange={toggleTaskCompleted} />
        <div className={styles.taskName}>{ task.name }</div>
        <button className={styles.removeTaskBtn} onClick={deleteTask}></button>
    </div>)
}