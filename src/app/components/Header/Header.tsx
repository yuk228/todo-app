import React from "react"
import styles from "./Header.module.scss"
const Header = () => {
  return (
    <header>
        <div className={styles.wrapper}>
            <div className={styles.titles}>
                <h1>✅Todo App</h1>
                <p>written in nextjs</p>
            </div>
        </div>
    </header>
  )
}

export default Header