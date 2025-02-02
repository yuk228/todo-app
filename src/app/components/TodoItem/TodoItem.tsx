import React from 'react'
import styles from "../../page.module.scss"
const TodoItem = (props: {todo: string, onDelete: () => void}) => {

  return (
    <li>{props.todo}<button>Edit</button><button className={styles.deleteButton} onClick={props.onDelete}>Delete</button></li>
  )
}

export default TodoItem