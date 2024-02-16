import React, { useState } from "react";
import classes from "../styles/cart.module.css";
import PrimarySearchAppBar from "@/Components/Navigation/nav";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { AddRemoveToggle } from "@/store/sofaReducer";
import { chairToggle } from "@/store/chairReducer";
import { tableToggle } from "@/store/tableReducer";
import { cupToggle } from "@/store/cupReducer";
import Success from "@/Components/Completion/sucess";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useRouter } from "next/router";
const cart = () => {
  const router = useRouter();
  const [value, setvalue] = useState(false);
  const dispatch = useDispatch();
  const sofa = useSelector((state) =>
    state.sofa.sofas.filter((item) => {
      return item.ordered == true;
    })
  );
  const table = useSelector((state) =>
    state.table.tables.filter((item) => {
      return item.ordered == true;
    })
  );
  const cup = useSelector((state) =>
    state.cup.cups.filter((item) => {
      return item.ordered == true;
    })
  );
  const chair = useSelector((state) =>
    state.chair.chairs.filter((item) => {
      return item.ordered == true;
    })
  );
  const data = [...sofa, ...cup, ...table, ...chair];

  let price = 0;
  data.map((item) => {
    price = price + item.price;
  });
  const RemoveFromCart = (id, img) => {
    const spliting = img.split("/");
    const name = spliting[1];
    if (name == "chair") {
      dispatch(chairToggle(id));
    } else if (name == "table") {
      dispatch(tableToggle(id));
    } else if (name == "sofa") {
      dispatch(AddRemoveToggle(id));
    } else {
      dispatch(cupToggle(id));
    }
  };
  const c2 =
    useSelector((state) => state.cup.count) +
    useSelector((state) => state.sofa.count) +
    useSelector((state) => state.table.count) +
    useSelector((state) => state.chair.count);
  const OrderProcess = () => {
    const userConfirmed = window.confirm("Are you sure you want to proceed?");
    if (userConfirmed) {
      setvalue(true);
      function myFunction() {
        window.location.reload();
      }
      setTimeout(myFunction, 2000);
    } else {
      return;
    }
  };
  return (
    <div>
      {value && <Success />}
      <PrimarySearchAppBar />
      <div style={{ marginTop: "5rem" }} className={classes.container}>
        {data.length > 0 && (
          <h1 className={classes.heading}>
            Total no. of products in cart {c2}
          </h1>
        )}
        {data.length == 0 && (
          <center>
            <img src="/cart1.png" height={350} />
            <h1 style={{ margin: "0%" }}>Your cart is empty</h1>
          </center>
        )}
        {data.map((item) => (
          <>
            <div className={classes.box}>
              <img src={item.img} className={classes.img} />
              <div>
                <h2 className={classes.name}>{item.name}</h2>
                <h3>Quantity:1</h3>
                <h3>Price:{item.price}</h3>
                <h3 className={classes.desc}>{item.description}</h3>
                <div className={classes.bottom}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => RemoveFromCart(item.id, item.img)}
                  >
                    Remove
                  </Button>
                  <h2 className={classes.price}>
                    <CurrencyRupeeIcon />
                    {item.price}
                  </h2>
                </div>
              </div>
            </div>
          </>
        ))}
        {data.length > 0 && (
          <Button
            size="large"
            color="warning"
            variant="contained"
            onClick={OrderProcess}
            style={{ marginLeft: "43rem" }}
          >
            Pay {price}
          </Button>
        )}
      </div>
    </div>
  );
};

export default cart;
