// src/components/StatusFilter.tsx
import React from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "../them/ThemeProvider";

interface StatusFilterProps {
  status: {
    statuslist: string;
    enable: boolean;
  }[];
  tasksLenght: number;
  handleStatus: (type: string) => void;
  handleClearCompleted: () => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  status,
  tasksLenght,
  handleStatus,
  handleClearCompleted,
}) => {
  const { theme, toggleTheme } = useTheme() || {};

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: "540px",
        height: "25px",
        paddingTop: "21px",
        paddingLeft: "24px",
        paddingBottom: "16px",
        backgroundColor: theme === "light" ? "white" : "#25273D",
        border: "1px solid #E3E4F1",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        color: "#9495A5",
      }}
    >
      <Stack>
        <Typography whiteSpace={"nowrap"}>{tasksLenght} items left</Typography>
      </Stack>

      <Stack
        direction={"row"}
        spacing={"19px"}
        marginLeft={"60px"}
        marginRight={"56px"}
      >
        {status.map((status, index) => (
          <Stack
            key={index}
            onClick={() => handleStatus(status.statuslist)}
            sx={{
              cursor: "pointer",
            }}
          >
            <Typography
              color={status.enable === true ? "#3A7CFD" : "#9495A5"}
              fontWeight={status.enable === true ? "bold" : ""}
            >
              {status.statuslist}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Stack
        marginRight={"56px"}
        onClick={handleClearCompleted}
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography whiteSpace="nowrap">Clear Completed</Typography>
      </Stack>
    </Stack>
  );
};

export default StatusFilter;
