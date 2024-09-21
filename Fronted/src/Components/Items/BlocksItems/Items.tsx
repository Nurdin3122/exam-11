import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks.ts";
import {itemsLoading, itemsState} from "../ItemsSlice.ts";
import Spinner from "../../Spinner/Spinner.tsx";
import ItemCard from "./ItemCard.tsx";
import {getItems} from "../ItemsThunks.ts";

const Items = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(itemsState);
    const loading = useAppSelector(itemsLoading);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);
    return (
        <div className="container-fluid mt-5 d-flex flex-wrap justify-content-center">
            {
                loading ? (
                    <Spinner/>
                ) : (
                    items.map(item => (
                        <ItemCard key={item._id} _id={item._id} title={item.title} description={item.description} image={item.image} seller={item.seller} category={item.category} price={item.price}/>

                    ))
                )
            }
        </div>
    );
};

export default Items;