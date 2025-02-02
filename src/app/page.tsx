"use client"
import { useState } from "react";
import styles from "./page.module.scss";
import TodoItem from "./components/TodoItem/TodoItem";
export default function Home() {
  const [text, setText] = useState<string>("")
  const [todos, setTodos] = useState<string[]>([])
  return (
    <main>
      <div className={styles.wrapper}>
        <input
          type="text"
          value={text}
          placeholder="Input Todo"
          onChange={(e) => setText(e.target.value)}
          />
        <button className={styles.addButton} onClick={() => setTodos([...todos, text])}>+</button>
        <div className={styles.list}>
          <ul>
            {todos.map((todo, index) => {
              return <div key={index}>
                <TodoItem key={index} todo={todo} onDelete={() => setTodos((todos) => todos.filter((_, i) => i !== index))}/>
              </div>
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
