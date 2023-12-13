export default function A() {
  <AppBar>
    <Toolbar>
      <IconButton color="inherit">
        <DiamondIcon sx={{ fontSize: 40 }} />
      </IconButton>
      <Typography fontSize={30} flexGrow={1}>
        آموزش Material UI
      </Typography>
      <Box display={{ xs: "none", md: "block" }}>
        {PAGES.map((page, index) => (
          <Button key={index} sx={{ color: "white" }}>
            {page.title}
          </Button>
        ))}
      </Box>
      <Box display={{ xs: "flex", md: "none" }}>
        <IconButton onClick={handelClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          open={button}
          keepMounted
          anchorEl={buttonRef.current}
          transformOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          {PAGES.map((page, index) => (
            <MenuItem color="primary.main" key={index} sx={{}}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
  </AppBar>;
}
