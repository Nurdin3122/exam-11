import {createAsyncThunk} from "@reduxjs/toolkit";
import {ItemMutation} from "../../Types.ts";
import axiosApi from "../../AxiosApi/AxiosApi.ts";

export const postItems = createAsyncThunk(
    "items/postItems",
    async (items) => {
        const user = localStorage.getItem('persist:flea-market:user');
        const UserJsonParse = JSON.parse(user);
        const token = JSON.parse(UserJsonParse.user)
        if (!token) {
            throw new Error('User not authenticated');
        }

        const formData = new FormData();
        const keys = Object.keys(items) as (keyof ItemMutation)[];
        keys.forEach(key => {
            const value = items[key];
            formData.append(key, value);
        });

        const response = await axiosApi.post("/items",formData,{
            headers: {
                Authorization: `${token.token}`,
            }
        });
        return response.data

    }
)