import { createSlice } from '@reduxjs/toolkit';
import Content from '../Content';

export const contentSlice = createSlice({
    name: 'content',
    initialState: {
        content: Content
    },
    reducers: {
        addContent: (state, action) => {
            console.log(action.payload)
            state.content.push(action.payload)
            localStorage.setItem('stored', JSON.stringify(state.content) );
        },
        deleteContent: (state, action) => {
            state.content.splice(action.payload, 1);
            localStorage.setItem('storedContent', JSON.stringify(state.content))
        }
    }
})

export const { addContent,  deleteContent } = contentSlice.actions;
export const selectContent = (state) => state.content.content;
export default contentSlice.reducer;