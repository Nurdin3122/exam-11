import React from 'react';
import {useNavigate} from "react-router-dom";
import {apiUrl} from "../../../AxiosApi/BaseUrl.ts";
import imageNotAvailable from "../../../assets/imageNotAvailab.jpg"
import "./ItemCard.css"
interface Props {
    _id:string;
    title:string;
    description:string;
    image:string;
    seller:string;
    category:string;
    price:number
}

const ItemCard:React.FC<Props> = ({_id,title,image,price}) => {
    const navigate = useNavigate();
    let cardImage = imageNotAvailable;
    if (image) {
        cardImage = apiUrl + "/" + image;
    }
    const showOnePost = (id) => {
        console.log(id)
    };

    return (
        <div className="m-3 border block-item d-flex flex-column" onClick={() => showOnePost(_id)}>
            <div className="block-img m-2">
                <img className="image" src={`${cardImage}`} alt={title}/>
            </div>


            <div className="m-2 d-flex flex-column p-1 align-items-center">
                <div className="mb-5 text-center">
                    <h5  className="mt-2 mb-3 text-break ">{title}</h5>
                    <p className="text-primary m-0">Price</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;