import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getTheChosenOneCategories} from "./CategoriesThunks.ts";
import {categoryLoading, categoryState} from "./CategoriesSlice.ts";
import Spinner from "../Spinner/Spinner.tsx";
import CardCategory from "./CardCategory.tsx";

const Categories = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const theChosenOnesCategories = useAppSelector(categoryState);
    const loading = useAppSelector(categoryLoading);

    useEffect(() => {
        dispatch(getTheChosenOneCategories(id))
    }, [dispatch]);
    return (
        <div className="container-fluid mt-5 d-flex flex-wrap justify-content-center">
            {
                loading ? (
                    <Spinner/>
                ) : (
                    theChosenOnesCategories.map(category => (
                        <CardCategory key={category._id} _id={category._id} title={category.title} description={category.description} image={category.image} seller={category.seller}  price={category.price}
                        />
                    ))

                )
            }
        </div>
    );
};

export default Categories;