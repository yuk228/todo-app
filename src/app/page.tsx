"use client"
import { useState } from "react";
import styles from "./page.module.scss";

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
                <li>{todo}<button className={styles.deleteButton} onClick={() => setTodos((todos) => todos.filter((_, i) => i !== index))}>Delete</button></li>
              </div>
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
