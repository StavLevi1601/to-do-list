// src/App.tsx
import React, { useState } from "react";
import { Stack, Typography, Input } from "@mui/material";
import { Header } from "./components/Header";
import TaskItem from "./components/TaskItem";
import StatusFilter from "./components/StatusFilter";
import { ThemeProvider, useTheme } from "./them/ThemeProvider";

function AppContent() {
  const { theme, toggleTheme } = useTheme() || {};

  const [tasks, setTasks] = useState([
    {
      id: 1,
      testTask: "Complete online JavaScript course",
      completed: true,
      deleted: true,
    },
    {
      id: 2,
      testTask: "Jog around the park 3x",
      completed: false,
      deleted: false,
    },
    {
      id: 3,
      testTask: "10 minutes meditation",
      completed: false,
      deleted: false,
    },
    {
      id: 4,
      testTask: "Read for 1 hour",
      completed: false,
      deleted: false,
    },
    {
      id: 5,
      testTask: "Pick up groceries",
      completed: false,
      deleted: false,
    },
    {
      id: 6,
      testTask: "Complete Todo App on Frontend Mentor",
      completed: false,
      deleted: false,
    },
  ]);

  const [status, setStatus] = useState([
    {
      statuslist: "All",
      enable: true,
    },
    {
      statuslist: "Active",
      enable: false,
    },
    {
      statuslist: "Completed",
      enable: false,
    },
  ]);

  const tasksLenght = tasks.filter((task) => !task.completed).length;

  const handleCheckboxChange = (id: number) => {
    setTasks((prevTask) => {
      return prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    });
  };

  const handleNewToDo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTaskText = e.currentTarget.value;
      if (newTaskText.trim()) {
        setTasks((prevTasks) => [
          ...prevTasks,
          {
            id: prevTasks.length + 1,
            testTask: newTaskText,
            completed: false,
            deleted: false,
          },
        ]);
        e.currentTarget.value = "";
      }
    }
  };

  const handleStatus = (type: string) => {
    setStatus((prevStatus) =>
      prevStatus.map((status) =>
        status.statuslist === type
          ? { ...status, enable: true }
          : { ...status, enable: false }
      )
    );
  };

  const handleClearCompleted = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    const currentStatus = status.find((s) => s.enable)?.statuslist;
    if (currentStatus === "Active") {
      return !task.completed;
    }
    if (currentStatus === "Completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <Stack
      sx={{
        backgroundColor: theme === "light" ? "#ffffff" : "#171823",
        minHeight: "100vh",
        padding: "0px",
      }}
    >
      {" "}
      <Header />
      <Stack
        spacing={"20px"}
        sx={{
          position: "absolute",
          top: "154px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Create a new todo..."
          onKeyDown={handleNewToDo}
          sx={{
            width: "540px",
            height: "64px",
            padding: "20px",
            backgroundColor: theme === "light" ? "white" : "#171823",
            borderRadius: "8px",
            color: theme === "light" ? "black" : "#767992",
          }}
        />

        <Stack
          spacing={0}
          sx={{
            width: "540px",
          }}
        >
          <Stack
            spacing={0}
            sx={{
              width: "524px",
            }}
          >
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}

            <StatusFilter
              status={status}
              tasksLenght={tasksLenght}
              handleStatus={handleStatus}
              handleClearCompleted={handleClearCompleted}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
