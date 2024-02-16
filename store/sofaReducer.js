import { createSlice } from "@reduxjs/toolkit";
const sofaSlice = createSlice({
  name: "sofa",
  initialState: {
    sofas: [
      {
        id: 1,
        name: "Comfort Plus Sofa",
        star: 3.5,
        price: 11899,
        img: "/sofa/sofa1.jpg",
        ordered: false,
        description:
          "A luxurious and comfortable sofa for ultimate relaxation.",
      },
      {
        id: 2,
        name: "Modern Leather Sofa",
        star: 3.0,
        price: 12399,
        img: "/sofa/sofa2.jpg",
        ordered: false,
        description:
          "Sleek and stylish leather sofa, perfect for modern interiors.",
      },
      {
        id: 3,
        name: "Cozy Corner Sofa",
        star: 4.0,
        price: 91399,
        img: "/sofa/sofa3.jpg",
        ordered: false,
        description: "Spacious corner sofa designed for maximum coziness.",
      },
      {
        id: 4,
        name: "Vintage Velvet Sofa",
        star: 4.5,
        price: 51499,
        img: "/sofa/sofa4.jpg",
        ordered: false,
        description:
          "Elegant vintage-style velvet sofa for a touch of sophistication.",
      },
      {
        id: 5,
        name: "Convertible Sleeper Sofa",
        star: 3.5,
        price: 61199,
        img: "/sofa/sofa5.jpg",
        ordered: false,
        description:
          "Versatile sofa that easily converts into a comfortable sleeper.",
      },
      {
        id: 6,
        name: "Lounge Chaise Sofa",
        star: 5,
        price: 41099,
        img: "/sofa/sofa6.jpg",
        ordered: false,
        description: "Chic and comfortable chaise sofa for laid-back lounging.",
      },
    ],
    count: 0,
  },
  reducers: {
    AddRemoveToggle: (state, action) => {
      state.sofas.map((item) => {
        if (item.id == action.payload) {
          item.ordered = !item.ordered;
        }
      });
      const c1 = state.sofas.filter((item) => {
        return item.ordered == true;
      }).length;
      state.count = c1;
    },
  },
});

export const { AddRemoveToggle } = sofaSlice.actions;
export const sofaReducer = sofaSlice.reducer;
