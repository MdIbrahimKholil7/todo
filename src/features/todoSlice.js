
import { createSlice } from "@reduxjs/toolkit";
import { addToDb } from "../components/utils/updateLocalStore";

const initialState = {
    allTodo: [],

};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.allTodo.push(action.payload)
            localStorage.setItem('tdoss', JSON.stringify(state.allTodo))
        },
        addReloadTodo: (state, action) => {
            state.allTodo = action.payload
        },

        deleteTodo: (state, action) => {

            state.allTodo.splice(state.allTodo.findIndex((arrow) => arrow.id === action.payload), 1);
            localStorage.removeItem('tdoss')
            localStorage.setItem("tdoss", JSON.stringify(state.allTodo))
        },
        editTodo: (state, action) => {
            const data = state.allTodo.map(e => {
                if (e.id === action.payload.id) {
                    e.todoName = action.payload.name;
                }
                return e;
            })
            state.allTodo = data
            localStorage.removeItem('tdoss')
            localStorage.setItem("tdoss", JSON.stringify(state.allTodo))
        },
    },
});

export const { addTodo, deleteTodo, editTodo, addReloadTodo } = todoSlice.actions;
export default todoSlice.reducer;
