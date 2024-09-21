import {Categories} from "../../Types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {getCategories, getTheChosenOneCategories} from "./CategoriesThunks.ts";

export interface CategoriesState {
    categories:Categories[];
    category:Categories[];
    categoryLoading:boolean;
    categoryError:boolean;
    categoriesLoading:boolean;
    categoriesError:boolean;
}

export const initialState:CategoriesState = {
    categories:[],
    category:[],
    categoryLoading:false,
    categoriesLoading:false,
    categoriesError:false,
    categoryError:false
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
            state.categoriesLoading = false
            state.categories = categories;

        });
        builder.addCase(getCategories.rejected,(state) => {
            state.categoriesLoading = false;
            state.categoriesError = true;
        });

        builder.addCase(getTheChosenOneCategories.pending,(state) => {
            state.categoryLoading = true;
            state.categoryError = false
        });
        builder.addCase(getTheChosenOneCategories.fulfilled,(state,{payload:category}) => {
            state.category = category;
            state.categoryLoading = false;

        });
        builder.addCase(getTheChosenOneCategories.rejected,(state) => {
            state.categoryLoading = false;
            state.categoryError = true
        });


    },
});

export const CategoriesReducer = CategoriesSlice.reducer;
export const categoriesState = (state:RootState) => state.categories.categories;
export const categoryState = (state:RootState) => state.categories.category;
export const categoriesLoading = (state:RootState) => state.categories.categoriesLoading;
export const categoryLoading = (state:RootState) => state.categories.categoryLoading;