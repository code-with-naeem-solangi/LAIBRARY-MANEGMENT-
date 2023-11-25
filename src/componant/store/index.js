import { configureStore } from "@reduxjs/toolkit";
import indexSlice from "./indexslice.js";

const Store = configureStore({
    reducer : indexSlice,
})
export default Store;