import React from "react";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Sofa = () => {
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        height: "fit-content",
      }}
    >
      <img src="/sofa.png" width={450} />
      <p
        style={{
          width: "600px",
          fontSize: "1.3rem",
          fontFamily: "cursive",
        }}
      >
        <FormatQuoteIcon />
        Sofa elevate your living space with our design. Crafted from soft
        fabric, this piece combines style and comfort effortlessly. With
        dimensions 55x24, it's perfect for both compact apartments and spacious
        homes. Explore the detailed craftsmanship and make this a centerpiece in
        your home
        <FormatQuoteIcon />
      </p>
    </motion.div>
  );
};

export default Sofa;
