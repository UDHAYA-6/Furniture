import { createSlice } from "@reduxjs/toolkit";
const cupSlice = createSlice({
  name: "cup",
  initialState: {
    cups: [
      {
        id: 1,
        ordered: false,
        star: 2.5,
        name: "Classic Vanity Set",
        price: 22429.99,
        img: "/cupboard/cup1.jpg",
        description:
          "A timeless vanity set with a mirror and ample storage space.",
      },
      {
        id: 2,
        ordered: false,
        star: 2.0,
        name: "Modern Glass Dressing Table",
        price: 22399.99,
        img: "/cupboard/cup2.jpg",
        description:
          "Sleek and modern dressing table with a glass surface for a contemporary look.",
      },
      {
        id: 3,
        ordered: false,
        star: 4.0,
        name: "Vintage Oak Dresser",
        price: 12199.99,
        img: "/cupboard/cup3.jpg",
        description:
          "Charming vintage oak dresser with intricate details and a matching stool.",
      },
      {
        id: 4,
        ordered: false,
        star: 4.5,
        name: "Elegant White Makeup Table",
        price: 23579.99,
        img: "/cupboard/cup4.jpg",
        description:
          "Elegantly designed white makeup table with a spacious mirror and drawers.",
      },
      {
        id: 5,
        ordered: false,
        star: 3.0,
        name: "Compact Folding Vanity",
        price: 44189.99,
        img: "/cupboard/cup5.jpg",
        description:
          "Space-saving folding vanity ideal for small rooms or apartments.",
      },
      {
        id: 6,
        ordered: false,
        star: 4.5,
        name: " Mirrored Dressing Table",
        price: 34329.99,
        img: "/cupboard/cup6.jpg",
        description:
          "A stylish dressing table with mirror for a modern and glamorous touch.",
      },
    ],
    count: 0,
  },
  reducers: {
    cupToggle: (state, action) => {
      state.cups.map((item) => {
        if (item.id == action.payload) {
          item.ordered = !item.ordered;
        }
      });
      const c1 = state.cups.filter((item) => {
        return item.ordered == true;
      }).length;
      state.count = c1;
    },
  },
});

export const { cupToggle } = cupSlice.actions;
export const cupReducer = cupSlice.reducer;
