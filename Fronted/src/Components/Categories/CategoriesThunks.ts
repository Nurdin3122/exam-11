import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../AxiosApi/AxiosApi.ts";
import {Categories} from "../../Types.ts";

export const getCategories = createAsyncThunk<Categories[]>(
    "categories/postCategories",
    async () => {
        const response = await axiosApi.get<Categories[] | null>("categories");
        return response.data || [];
    }
);

export const getTheChosenOneCategories = createAsyncThunk<Categories[],string>(
    "categories/getTheChosenOneCategories",
    async (id:string) => {
        const response = await axiosApi.get<Categories[] | null>(`/categories/${id}`);
        return response.data || []
    }
);