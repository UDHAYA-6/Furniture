import { createSlice } from "@reduxjs/toolkit";
const chairSlice = createSlice({
  name: "chair",
  initialState: {
    chairs: [
      {
        id: 1,
        ordered: false,
        star: 5.0,
        name: "Classic Oak Chair",
        price: 1439,
        img: "/chair/chair1.jpg",
        description: "Sturdy and timeless oak chair with a classic design.",
      },
      {
        id: 2,
        ordered: false,
        star: 4.5,
        name: "Modern Teak Chair",
        price: 1499,
        img: "/chair/chair2.jpg",
        description: "Sleek and modern teak chair for contemporary interiors.",
      },
      {
        id: 3,
        ordered: false,
        star: 2.5,
        name: "Rustic Pine Chair",
        price: 1529,
        img: "/chair/chair3.jpg",
        description:
          "Charming rustic pine chair with a touch of countryside flair.",
      },
      {
        id: 4,
        ordered: false,
        star: 3.0,
        name: "Elegant Walnut Chair",
        price: 1279,
        img: "/chair/chair4.jpg",
        description:
          "Elegantly crafted walnut chair for a touch of sophistication.",
      },
      {
        id: 5,
        ordered: false,
        star: 3.5,
        name: "Vintage Mahogany Chair",
        price: 1549,
        img: "/chair/chair5.jpg",
        description:
          "Vintage-style mahogany chair with ornate details for a classic look.",
      },
      {
        id: 6,
        ordered: false,
        star: 4.5,
        name: "Minimalist Birch Chair",
        price: 1390,
        img: "/chair/chair6.jpg",
        description:
          "Simple and minimalist birch chair for a clean and modern aesthetic.",
      },
    ],
    count: 0,
  },
  reducers: {
    chairToggle: (state, action) => {
      state.chairs.map((item) => {
        if (item.id == action.payload) {
          item.ordered = !item.ordered;
        }
      });
      const c1 = state.chairs.filter((item) => {
        return item.ordered == true;
      }).length;
      state.count = c1;
    },
  },
});

export const chairReducer = chairSlice.reducer;
export const { chairToggle } = chairSlice.actions;
