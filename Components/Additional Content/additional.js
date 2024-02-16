import React from "react";
import { motion } from "framer-motion";
const Additional = () => {
  return (
    <motion.div
      transition={{ duration: 1, type: "tween", bounce: 1 }}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <img src="vector.png" />
      <div
        style={{
          width: "500px",
          fontFamily: "monospace",
        }}
      >
        <h3>Home Decor Tips</h3> Our blog is your go-to source for home décor
        inspiration. From color palettes to layout ideas, we share tips and
        tricks to help you create a stylish and inviting home.
        <h3> Seasonal Trends</h3>
        Stay updated on the latest seasonal trends in furniture and interior
        design. Discover how to refresh your space with the changing seasons.
        <h3>DIY Projects </h3>Get your hands dirty with our DIY furniture
        projects. Follow step-by-step guides to create custom pieces that
        showcase your creativity.
        <h3>Return and Exchange</h3>
        Policies We stand by the quality of our products. Review our transparent
        return and exchange policies to ensure your satisfaction with every
        purchase.
      </div>
    </motion.div>
  );
};

export default Additional;
