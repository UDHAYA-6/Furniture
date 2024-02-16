import { useRouter } from "next/router";
import classes from "./display.module.css";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { motion } from "framer-motion";
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const router = useRouter();
  const openFurniture = (value) => {
    router.replace(value);
  };
  return (
    <motion.div
      transition={{ duration: 1, type: "tween", bounce: 1 }}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
    >
      <center>
        <h1
          style={{
            borderBottom: "2px solid black",
            width: "fit-content",
            padding: "1rem",
          }}
        >
          India's largest furniture display
        </h1>
      </center>
      <ImageList
        sx={{ width: "100%", height: 390 }}
        variant="quilted"
        style={{ backgroundColor: "black" }}
        cols={12}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className={classes.img}
            onClick={() => openFurniture(item.link)}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </motion.div>
  );
}

const itemData = [
  {
    img: "/sofa/sofa1.jpg",
    title: "sofa1",
    link: "/sofa",
    rows: 2,
    cols: 3,
  },
  {
    img: "/cupboard/cup1.jpg",
    title: "cup1",
    link: "/cupboard",
    cols: 3,
    rows: 3,
  },
  {
    img: "sofa/sofa6.jpg",
    title: "sofa6",
    link: "/sofa",
    cols: 3,
  },
  {
    img: "/table/table1.jpg",
    title: "table1",
    link: "/table",
    cols: 3,
  },

  {
    img: "chair/chair5.jpg",
    title: "chair5",
    link: "/chair",
    cols: 2,
    rows: 2,
  },
  {
    img: "/table/table2.jpg",
    title: "table2",
    link: "/table",
    cols: 3,
    rows: 2,
  },

  {
    img: "/table/table3.jpg",
    title: "table3",
    link: "/table",
  },
  {
    img: "/sofa/sofa3.jpg",
    title: "sofa3",
    link: "/sofa",
    cols: 3,
  },
  {
    img: "/chair/chair2.jpg",
    title: " chair2",
    link: "/chair",
  },
];
