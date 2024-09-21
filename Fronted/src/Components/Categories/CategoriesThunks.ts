import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../AxiosApi/AxiosApi.ts";
import {Categories} from "../../Types.ts";

export const getCategories = createAsyncThunk<Categories[]>(
    "categories/postCategories",
    async () => {
        const response = await axiosApi.get<Categories[] | []>("categories");
        return response.data || [];
    }
)