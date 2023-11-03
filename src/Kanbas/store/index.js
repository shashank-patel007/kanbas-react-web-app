import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer
  }
});


export default store;