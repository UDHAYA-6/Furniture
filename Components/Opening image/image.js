import React from "react";
import { motion } from "framer-motion";

import classes from "./image.module.css";
const Image = () => {
  return (
    <>
      <motion.div
        className={classes.container}
        transition={{ duration: 1, type: "tween", bounce: 1 }}
        initial={{ opacity: 0.6, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <motion.img
          initial={{ opacity: 0.7, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/bg.jpg"
          height={600}
          className={classes.img}
        />
        <motion.div
          initial={{ opacity: 0.5, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={classes.div}
        >
          <h1> Velvet Visions Furnitures</h1>
          <p> Where Comfort Meets Style! </p>
          <p>
            Discover the perfect blend of form and function with our exquisite
            collection of handcrafted furniture. Explore our latest arrivals and
            find exclusive deals to elevate your home décor.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className={classes.container2}
        transition={{ duration: 1, type: "tween", bounce: 1 }}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <div className={classes.box1}>
          <h2>About us</h2>
          <p>
            At Velvet Visions Furnitures, we are passionate about creating
            spaces that reflect your unique style. Since 1978, we have been
            dedicated to providing high-quality, timeless furniture that stands
            the test of time. Our team of experienced designers and craftsmen
            work tirelessly to bring you pieces that not only enhance your home
            but tell a story.
          </p>
        </div>
        <div className={classes.box2}>
          <img src="/lamp.png" height={300} />
        </div>
      </motion.div>
    </>
  );
};

export default Image;
