import {Categories} from "../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {getCategories} from "./CategoriesThunks.ts";

export interface CategoriesState {
    categories:Categories[];
    categoriesLoading:boolean;
    categoriesError:boolean;
}

export const initialState:CategoriesState = {
    categories:[],
    categoriesLoading:false,
    categoriesError:false,
}

export const CategoriesSlice = createSlice<CategoriesState>({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getCategories.pending,(state) => {
            state.categoriesLoading = true;
            state.categoriesError = false;
        });
        builder.addCase(getCategories.fulfilled,(state,{payload:categories}) => {
            state.categories = categories;
            state.categoriesLoading = false
        });
        builder.addCase(getCategories.rejected,(state) => {
            state.categoriesLoading = false;
            state.categoriesError = true;
        });
    },
});

export const CategoriesReducer = CategoriesSlice.reducer;
export const categoriesState = (state:RootState) => state.categories.categories;
export const categoriesLoading = (state:RootState) => state.categories.categories;