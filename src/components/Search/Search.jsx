import styles from "./Search.module.css"

export function Search({ searchString, changeSearchString}){
    return (<input className={styles.searchBar} type="text" placeholder="What needs to be done" value={searchString} onChange={(e) => changeSearchString(e.target.value)}></input>)
}