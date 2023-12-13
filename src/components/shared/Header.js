import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import headingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCarrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box>
      <Container>
        <Image
          src={headingImage}
          width={500}
          height={500}
          alt="the-dragon-news"
          className="mx-auto my-2"
        />
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
