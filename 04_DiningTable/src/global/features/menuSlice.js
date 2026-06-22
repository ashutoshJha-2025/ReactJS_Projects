import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import menuData from "../../assets/DiningTable.menus.json";

export const loadMenuItems = createAsyncThunk(
    "menu/loadMenuItems",
    async () => {
        return menuData;
    }
);

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        items: [],
        query: "",
        activeTab: "All",
        loading: false,
        error: null,
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setItems(state, action) {
            state.items = action.payload;
        },
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadMenuItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadMenuItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(loadMenuItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to load menu";
            });
    },
});

export const { setQuery, setActiveTab, setItems, clearError } = menuSlice.actions;
export default menuSlice.reducer;