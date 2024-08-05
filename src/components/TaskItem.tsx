// src/components/TaskItem.tsx
import React from "react";
import { Stack, Typography, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useTheme } from "../them/ThemeProvider";

interface TaskItemProps {
  task: {
    id: number;
    testTask: string;
    completed: boolean;
    deleted: boolean;
  };
  onCheckboxChange: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onCheckboxChange }) => {
  const { theme } = useTheme() || {};

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: "540px",
        height: "64px",
        paddingTop: "15px",
        paddingLeft: "24px",
        borderTopRightRadius: task.id === 1 ? "8px" : 0,
        borderTopLeftRadius: task.id === 1 ? "8px" : 0,
        backgroundColor: theme === "light" ? "#ffffff" : "#25273D",
        color: "#494C6B",
        border: theme === "light" ? "1px solid #E3E4F1" : "1px solid #979797",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => onCheckboxChange(task.id)}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleOutlineIcon />}
        sx={{
          borderRadius: "50%",
        }}
      />
      <Typography
        component="span"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textDecoration: task.completed ? "line-through" : "none",
          color:
            theme === "light"
              ? !task.completed
                ? "#494C6B"
                : "#D1D2DA"
              : !task.completed
              ? "#D1D2DA"
              : "#494C6B",
        }}
      >
        {task.testTask}
      </Typography>
    </Stack>
  );
};

export default TaskItem;
