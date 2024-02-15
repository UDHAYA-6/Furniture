import React from "react";

const Additional = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <img src="vector.jpg" />
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
    </div>
  );
};

export default Additional;
