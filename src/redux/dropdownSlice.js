import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeDropdown: null,
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    toggleDropdown: (state, action) => {
      state.activeDropdown = state.activeDropdown === action.payload ? null : action.payload;
    },
    closeDropdown: (state) => {
      state.activeDropdown = null;
    },
  },
});

export const { toggleDropdown, closeDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
