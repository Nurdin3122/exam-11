export interface User {
    _id:string;
    username:string;
    token:string;
}

export interface UserMutation {
    username:string;
    password:string;
    displayName:string;
    phoneNumber:string;
}

export interface UserMutationFroLogIn {
    username:string;
    password:string;
}

export interface Item {
    _id:string;
    title:string;
    seller:string;
    category:string;
    price:number;
    image:string | null;
    description:string;
}

export interface ItemMutation {
    title:string;
    category:string;
    price:string;
    image:string | null;
    description:string;
}

export interface Categories {
    _id:string;
    title:string;
    description:string;
}