import User from "../models/User";
import {HydratedDocument} from "mongoose";
import {UserFields} from "../Type.Db";
import { Request, Response, NextFunction } from "express";
export interface RequestWithUser extends Request {
    user: HydratedDocument<UserFields>;
}


const auth = async (expressReq: Request, res:Response, next: NextFunction) => {
    const req = expressReq as RequestWithUser;
    const token = req.get('Authorization');
    if (!token) {
        return res.status(401).send({ error: 'No token present' });
    }
    try {
        const user : HydratedDocument<UserFields> | null = await User.findOne({ token });
        if (!user) {
            return res.status(401).send({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).send({ error: 'Internal server error' });
    }
};

export default auth;