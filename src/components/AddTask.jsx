import { Input } from "antd"
import { useState } from "react"

const { Search } = Input

export default function AddTask({ setTaskList }) {
  const [task, setTask] = useState("")
  const addTask = (value) => {
    fetch("https://th3-doo-doo-api-jv.web.app/tasks", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, done: false }),
    })
      .then((results) => results.json())
      .then((data) => {
        setTaskList(data)
        setTask("")
      })
      .catch(console.error)
  }
  return (
    <Search
      value={task}
      onChange={e => setTask(e.target.value)}
      enterButton="Add"
      size="Large"
      onSearch={addTask}
    />
  )
}
