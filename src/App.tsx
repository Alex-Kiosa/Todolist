import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    let [tasks1, setTask1] = useState(
        [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "React", isDone: false},
            {id: 4, title: "React", isDone: false},
            {id: 5, title: "React", isDone: false},
        ])

    const removeTasks = (taskId: number) => {
        tasks1 = tasks1.filter((el) => el.id !== taskId)
        setTask1(tasks1)
    }

    return (
        <div className="App">
            <Todolist
                title={"What to learn 1"}
                tasks={tasks1}
                removeTasks={removeTasks}/>
        </div>
    );
}

export default App;
