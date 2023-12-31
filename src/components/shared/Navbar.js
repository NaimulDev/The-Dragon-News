"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import Header from "./Header";
const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/categories/news?category=all-news",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <>
      <Header />
      <div className="bg-black">
        <AppBar position="static" className="bg-black text-white">
          <Container className="bg-black text-white" maxWidth="xl">
            <Toolbar className="text-white" disableGutters>
              <Image src={logo} width={100} height={100} alt="logo" />
              <Box className="w-full text-center text-white">
                {navItems.map((item) => (
                  <Link key={item} href={item.pathname}>
                    <Button className="text-white">{item.route}</Button>
                  </Link>
                ))}
              </Box>
              <Box>
                <Stack
                  direction="row"
                  sx={{
                    "& svg": {
                      color: "white",
                    },
                  }}
                >
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}
export default Navbar;
