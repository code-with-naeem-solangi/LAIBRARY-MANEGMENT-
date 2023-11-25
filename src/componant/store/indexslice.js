import { createSlice } from "@reduxjs/toolkit";
const uer = JSON.parse(localStorage.getItem("Login"));
const bok = JSON.parse(localStorage.getItem("books"));
console.log("BOOKS CONSOLE", bok);
const shal = JSON.parse(localStorage.getItem("shalve"));
console.log("SHALVE CONSOLE", shal);
const auth = JSON.parse(localStorage.getItem("Authar"));
console.log("AUTHR CONSOLE", auth);

const IndxSlice = createSlice({
  name: "LIBRARY",
  initialState: {
    user: uer,
    books: bok || [],
    shalve: shal || [],
    authar: auth || [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("Login", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
    },
    addBook: (state, action) => {
      const BookDetl = {
        ...action.payload,
        id: Math.random(),
      };
      state.books.push(BookDetl);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
   
    addAuthar: (state, action) => {
      const authars = {
        ...action.payload,
        id: Math.random(),
      };
      state.authar.push(authars);
      localStorage.setItem("Authar", JSON.stringify(state.authar));
    },
    autharDelete: (state, action) => {
      const detete = action.payload;
      state.authar = state.authar.filter((b) => b.id !== detete);
      localStorage.setItem("Authar", JSON.stringify(state.authar));
    },
    addShalve: (state, action) => {
      const shalves = {
        ...action.payload,
        id: Math.random(),
      };
      state.shalve.push(shalves);
      localStorage.setItem("shalve", JSON.stringify(state.shalve));
    },
    shalvDelete: (state, action) => {
      const detete = action.payload;
      state.shalve = state.shalve.filter((b) => b.id !== detete);
      localStorage.setItem("shalve", JSON.stringify(state.shalve));
    },
  },
});
export const { loginUser, logout, addBook, addAuthar, addShalve,autharDelete ,shalvDelete} =
  IndxSlice.actions;
export default IndxSlice.reducer;
