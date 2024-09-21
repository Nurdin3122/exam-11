import React from 'react';
import imageNotAvailable from "../../assets/imageNotAvailab.jpg";
import {apiUrl} from "../../AxiosApi/BaseUrl.ts";
interface Props {
    _id:string;
    title:string;
    description:string;
    image:string;
    seller:string;
    price:number
}

const CardCategory:React.FC<Props>= ({_id,title,description,image,seller,price}) => {
    let cardImage = imageNotAvailable;
    if (image) {
        cardImage = apiUrl + "/" + image;
    }

    const showOnePost = (id:string) => {
        console.log("it it working")
    }

    return (
        <div className="m-3 border block-item d-flex flex-column" onClick={() => showOnePost(_id)}>
            <div className="block-img m-2">
                <img className="image" src={`${cardImage}`} alt={title}/>
            </div>


            <div className="m-2 d-flex flex-column p-1 align-items-center">
                <div className="block">
                    <span> {seller.displayName} <span>{seller.phoneNumber}</span></span>
                </div>
                <div className="mb-5 text-center">
                    <h5 className="mt-2 mb-3 text-break ">{title}</h5>
                    <h6>{description}</h6>
                    <p className="text-primary m-0">Price</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default CardCategory;