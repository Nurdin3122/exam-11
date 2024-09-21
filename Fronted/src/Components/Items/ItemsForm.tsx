import React, {useEffect, useState} from 'react';
import FormForFiles from "../FormForFiles/FormForFiles.tsx";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {ItemMutation} from "../../Types.ts";
import {postItems} from "./ItemsThunks.ts";
import {getCategories} from "../Categories/CategoriesThunks.ts";
import {categoriesState} from "../Categories/CategoriesSlice.ts";
const emptyState:ItemMutation = {
    title: "",
    description: "",
    image:"",
    price:"",
    category:"",
}

const ItemsForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [newItem, setNewItem] = useState<ItemMutation>(emptyState);
    const categories = useAppSelector(categoriesState);

    useEffect(() => {
        dispatch(getCategories(newItem));
    }, [dispatch]);


    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setNewItem((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };

    const onSend = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(postItems(newItem))
            navigate('/ShowTracks');
        } catch(error) {
            console.log(error);
        }
    };

    const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;
        if (files) {
            setNewItem(prevState => ({
                ...prevState, [name]: files[0]
            }));
        }
    };


    return (
        <div className="d-flex flex-column">
            <h3 className="mt-5 d-flex justify-content-center">Create Item</h3>
            <form onSubmit={onSend}>

                <h5 className="mt-5 d-flex justify-content-center">Title</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           required
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="title"
                           id="title"
                           onChange={onChange}
                    />
                </div>

                <h5 className="mt-5 d-flex justify-content-center">Description</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="description"
                           id="description"
                           required
                           onChange={onChange}
                    />
                </div>

                <h5 className="mt-5 d-flex justify-content-center">Image</h5>
                <div className="mt-5 d-flex justify-content-center">
                    <div className="col-12 col-sm-6">
                        <FormForFiles
                            name="image"
                            onChange={fileInputChangeHandler}
                        />
                    </div>
                </div>

                <h5 className="mt-5 d-flex justify-content-center">Which select is this item?</h5>
                <select className="form-select mt-5"
                        aria-label="Default select example"
                        name="category"
                        value={newItem.category}
                        onChange={onChange}
                        required>
                    <option value="" disabled>Open this select menu</option>
                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.title}</option>
                    ))}
                </select>


                <h5 className="mt-5 d-flex justify-content-center">price</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="price"
                           id="price"
                           required
                           onChange={onChange}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-danger mt-5 mb-5">Create</button>
                </div>


            </form>
        </div>
    );
};

export default ItemsForm;