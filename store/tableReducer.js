import { createSlice } from "@reduxjs/toolkit";
const tableSlice = createSlice({
  name: "table",
  initialState: {
    tables: [
      {
        id: 1,
        ordered: false,
        star: 3.5,
        name: "Classic Wooden Dining Table",
        price: 42499,
        img: "/table/table1.jpg",
        description:
          "A timeless wooden dining table with a traditional design.",
      },
      {
        id: 2,
        ordered: false,
        star: 4.5,
        name: "Modern Glass-Top Dining Table",
        price: 12699,
        img: "/table/table2.jpg",
        description:
          "Sleek and modern dining table with a glass top for a contemporary look.",
      },
      {
        id: 3,
        ordered: false,
        star: 5,
        name: "Rustic Farmhouse Dining Table",
        price: 24599,
        img: "/table/table3.jpg",
        description:
          "Charming rustic farmhouse dining table with sturdy construction.",
      },
      {
        id: 4,
        ordered: false,
        star: 3.0,
        name: "Elegant Marble Dining Table",
        price: 54899,
        img: "/table/table4.jpg",
        description:
          "Elegantly crafted dining table with a luxurious marble top.",
      },
      {
        id: 5,
        ordered: false,
        star: 4.5,
        name: "Space-Saving Drop Leaf Table",
        price: 22399,
        img: "/table/table5.jpg",
        description:
          "Compact dining table with a drop-leaf design for space-saving functionality.",
      },
      {
        id: 6,
        ordered: false,
        star: 3.5,
        name: "Metal Dining Table",
        price: 45799,
        img: "/table/table6.jpg",
        description:
          "A stylish dining table with a metal frame for a modern and industrial touch.",
      },
    ],
    count: 0,
  },
  reducers: {
    tableToggle: (state, action) => {
      state.tables.map((item) => {
        if (item.id == action.payload) {
          item.ordered = !item.ordered;
        }
      });
      const c1 = state.tables.filter((item) => {
        return item.ordered == true;
      }).length;
      state.count = c1;
    },
  },
});

export const { tableToggle } = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
