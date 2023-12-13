"use client";

import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const { data: allCategories } = await getAllCategories();

  return (
    <Box className="mt-5 bg-gray-100 px-5 py-2">
      <Typography>
        <Divider />
        <Stack rowGap={1} sx={{ mt: 2.5 }}>
          {allCategories.map((category) => (
            <Button variant="outlined" key={category.id}>
              <Link href={`/categories/news?category=${category.title}`}>
                {" "}
                {category.title}
              </Link>
            </Button>
          ))}
        </Stack>
      </Typography>
    </Box>
  );
};

export default CategoryList;
