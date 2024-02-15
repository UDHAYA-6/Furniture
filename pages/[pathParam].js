import React, { useState } from "react";
import { useRouter } from "next/router";
import PrimarySearchAppBar from "@/Components/Navigation/nav";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/Components/Footer/footer";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { chairToggle } from "@/store/chairReducer";
import { tableToggle } from "@/store/tableReducer";
import { cupToggle } from "@/store/cupReducer";
import { AddRemoveToggle } from "@/store/sofaReducer";
import classes from "../styles/Home.module.css";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import DeleteIcon from "@mui/icons-material/Delete";
const All = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pathParam } = router.query;
  let data;
  if (pathParam == "sofa") {
    data = useSelector((state) => state.sofa.sofas);
  } else if (pathParam == "table") {
    data = useSelector((state) => state.table.tables);
  } else if (pathParam == "chair") {
    data = useSelector((state) => state.chair.chairs);
  } else {
    data = useSelector((state) => state.cup.cups);
  }
  const CartToggle = (id) => {
    if (pathParam == "sofa") {
      dispatch(AddRemoveToggle(id));
    } else if (pathParam == "table") {
      dispatch(tableToggle(id));
    } else if (pathParam == "chair") {
      dispatch(chairToggle(id));
    } else {
      dispatch(cupToggle(id));
    }
  };

  const [open, setopen] = useState(false);

  const backdropFun = (Img) => {
    window.open(Img, "_blank");
  };

  const HandleClose = () => {
    setopen(false);
  };
  return (
    <>
      <PrimarySearchAppBar />
      <div style={{ marginTop: "4rem" }}>
        <div className={classes.container}>
          {data.map((item) => (
            <div key={item.id} className={classes.box}>
              <img
                src={item.img}
                width={300}
                height={260}
                className={classes.img}
                onClick={() => {
                  backdropFun(item.img);
                }}
              />
              <p className={classes.name}>{item.name}</p>
              <Rating
                name="text-feedback"
                value={item.star}
                readOnly
                precision={0.5}
              />
              <p className={classes.price}>
                <CurrencyRupeeIcon fontSize="medium" />
                {item.price}
              </p>
              <p className={classes.desc}>{item.description}</p>
              <div>
                <span>
                  <Button
                    variant="text"
                    color="info"
                    onClick={() => {
                      backdropFun(item.img);
                    }}
                  >
                    view
                  </Button>
                </span>
                <span>
                  <Button
                    variant="contained"
                    color={!item.ordered ? "success" : "error"}
                    onClick={() => CartToggle(item.id)}
                  >
                    {!item.ordered ? (
                      "add to cart"
                    ) : (
                      <>
                        remove
                        <DeleteIcon />
                      </>
                    )}
                  </Button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default All;
