import React from "react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Sofa = () => {
  return (
    <div
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
      <img src="/sofa.png" />
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
    </div>
  );
};

export default Sofa;
