import React from "react";
import PrimarySearchAppBar from "@/Components/Navigation/nav";
import Image from "@/Components/Opening image/image";
import Sofa from "@/Components/Sofa component/sofa";
import Display from "@/Components/Display item/display";
import { isMobile } from "react-device-detect";
import Additional from "@/Components/Additional Content/additional";
import Footer from "@/Components/Footer/footer";
const index = () => {
  return (
    <>
      {!isMobile ? (
        <>
          <PrimarySearchAppBar />
          <Image />
          <Sofa />
          <Display />
          <Additional />
          <Footer />
        </>
      ) : (
        <center>
          <div
            style={{
              textAlign: "justify",
              width: "70%",
              padding: "10px",
              backgroundColor: "#FFEB3B",
              borderRadius: "10px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <p>
              This application is optimized for PC and desktop. Please use a
              computer for the best experience.
            </p>
          </div>
        </center>
      )}
    </>
  );
};

export default index;
