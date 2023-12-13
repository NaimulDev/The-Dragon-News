"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideImage from "@/assets/Rectangle 9.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <Image src={sideImage} alt="logo" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
