import styles from "./CheckAll.module.css"

export function CheckAll({toggleAll, tasksLeft}) {
    return (
    <div className={styles.checkAll}>
        <div className={styles.checkAllText}>
            <input type="checkbox" onChange={(e) => toggleAll(e.target.checked)} checked={tasksLeft() == 0}/>
            <div>Check All</div>
        </div>
        <div className={styles.itemsLeft}>{tasksLeft()} items left</div>
    </div>)
}