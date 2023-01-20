
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTodo: [],

};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.allTodo.push(action.payload)
        },
        deleteTodo: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
        editTodo: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
