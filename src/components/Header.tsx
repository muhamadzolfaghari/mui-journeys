import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState, MouseEvent } from "react";

interface ButtonItem {
  title: string;
  url: string;
}

const BUTTONS: ButtonItem[] = [
  { title: "فروشگاه", url: "/shop" },
  { title: "ورود", url: "/login" },
  { title: "ثبت نام", url: "/sing-up" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLElement | null>(null);

  function handleMenuOpenClick(event: MouseEvent<HTMLElement>) {
    setMenuOpen(true);
    buttonRef.current = event.currentTarget;
  }

  return (
    <AppBar position="fixed" elevation={20}>
      <Container>
        <Toolbar>
          <IconButton color="inherit">
            <DiamondIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography fontSize={22} flexGrow={1}>
            آموزش Material UI
          </Typography>
          <Box display={{ sm: "none", md: "block" }}>
            {BUTTONS.map((button, index) => (
              <Button key={index} href={button.url} color="inherit">
                {button.title}
              </Button>
            ))}
          </Box>
          <Box display={{ sm: "block", md: "none" }}>
            <IconButton color="inherit" onClick={handleMenuOpenClick}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            onClose={() => {
              setMenuOpen(false);
            }}
            open={menuOpen}
            anchorEl={buttonRef.current}
            keepMounted
            anchorOrigin={{
              horizontal: "right",
              vertical: "bottom",
            }}
            transformOrigin={{
              horizontal: "right",
              vertical: "bottom",
            }}
          >
            {BUTTONS.map((button, index) => (
              <MenuItem key={index}>
                <Typography>{button.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
