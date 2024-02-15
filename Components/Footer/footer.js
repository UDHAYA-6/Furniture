import React from "react";
import styles from "./footer.module.css";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  const MovePage = (value) => {
    router.replace(value);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>
            Since 1978, we have been dedicated to providing high-quality,
            timeless furniture that stands the test of time. Our team of
            experienced designers and craftsmen work tirelessly to bring you
            pieces that not only enhance your home but tell a story.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Categories</h3>
          <ul>
            <li
              onClick={() => {
                MovePage("/chair");
              }}
            >
              Chairs
            </li>
            <li
              onClick={() => {
                MovePage("/table");
              }}
            >
              Table
            </li>
            <li
              onClick={() => {
                MovePage("/sofa");
              }}
            >
              Sofa
            </li>
            <li
              onClick={() => {
                MovePage("/cupboard");
              }}
            >
              Cupboard
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: velvetvisions@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2024 Your Furniture Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
