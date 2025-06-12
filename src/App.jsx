import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks.jsx";
import { useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        title: "Estudar Programação",
        description:
          "Estudar programação para se tornar um desenvolvedor full-stack",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Estudar React",
        description: "Estudar React para criar interfaces de usuário",
        isCompleted: true,
      },
      {
        id: 3,
        title: "Task 3",
        description: "Descrição da Task 3",
        isCompleted: true,
      },
    ]
  );
  function onTaskList(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), // Fix: Call v4 as a function
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskList={onTaskList}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
