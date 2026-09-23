import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: "",
      name: "",
      rollNumber: "",
      className: "",
      subject: "",
      marks: "",
      examType: "",
    },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
  },
});

export const { addStudent, deleteStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
