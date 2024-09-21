import {Item} from "../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {postItems} from "./ItemsThunks.ts";

export interface ItemsState {
    items:Item[];
    itemsLoading:boolean;
    itemsError:boolean
}

export const initialState:ItemsState = {
    items:[],
    itemsLoading:false,
    itemsError:false,
};

export const ItemsSlice = createSlice<ItemsState>({
    name:"items",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(postItems.pending,(state) => {
            state.itemsLoading = true;
            state.itemsError = false
        });
        builder.addCase(postItems.fulfilled,(state) => {
            state.itemsLoading = false;
        });
        builder.addCase(postItems.rejected,(state) => {
            state.itemsLoading = false;
            state.itemsError = true
        });
    },
});

export const ItemsReducer = ItemsSlice.reducer;
export const itemsState = (state:RootState) => state.items.items;
export const itemsLoading = (state:RootState) => state.items.itemsLoading;