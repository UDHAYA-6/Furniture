import React from "react";
import classes from "./image.module.css";
const Image = () => {
  return (
    <>
      <div className={classes.container}>
        <img src="/bg.jpg" height={600} className={classes.img} />
        <div className={classes.div}>
          <h1> Velvet Visions Furnitures</h1>
          <p> Where Comfort Meets Style! </p>
          <p>
            Discover the perfect blend of form and function with our exquisite
            collection of handcrafted furniture. Explore our latest arrivals and
            find exclusive deals to elevate your home décor.
          </p>
        </div>
      </div>
      <div className={classes.container2}>
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
          <img src="/lamp.jpg" height={300} />
        </div>
      </div>
    </>
  );
};

export default Image;
