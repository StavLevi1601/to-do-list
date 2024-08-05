import { IconButton, Stack, Typography } from "@mui/material";
import iconMoon from "../assets/images/icon-moon.svg";
import iconSun from "../assets/images/icon-sun.svg";
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";
import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import { useTheme } from "../them/ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme() || {};

  return (
    <>
      <Stack
        sx={{
          height: "300px",
          width: "100%",
          margin: 0,
          padding: 0,
          backgroundImage: `url(${
            theme === "light" ? bgDesktopLight : bgDesktopDark
          })`,
          backgroundSize: "cover",
        }}
      />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="348px"
        sx={{
          position: "absolute",
          zIndex: 2,
          top: "70px",
          left: "20px",
          right: "20px",
        }}
      >
        <Typography variant="h4" color="white">
          T O D O
        </Typography>
        <IconButton onClick={toggleTheme}>
          <img
            src={theme === "light" ? iconMoon : iconSun}
            alt={theme === "light" ? "Moon Icon" : "Sun Icon"}
            style={{ width: "26px", height: "25px" }}
          />
        </IconButton>
      </Stack>
    </>
  );
}
