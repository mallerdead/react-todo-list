import styles from "./TaskFilter.module.css"

export function TaskFilter({ taskFilters, toggleFilter}){
    return (
    <div className={styles.taskFilter}>
        <button className={`${styles.taskBtn} ${taskFilters[0] ? styles.active: ""}`} onClick={() => toggleFilter(0)}>All</button>
        <button className={`${styles.taskBtn} ${taskFilters[1] ? styles.active: ""}`} onClick={() => toggleFilter(1)}>Active</button>
        <button className={`${styles.taskBtn} ${taskFilters[2] ? styles.active: ""}`} onClick={() => toggleFilter(2)}>Completed</button>
    </div>)
}