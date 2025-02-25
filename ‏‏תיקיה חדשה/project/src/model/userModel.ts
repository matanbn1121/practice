import { Schema, model, Document } from "mongoose";
import { Address } from "./modelAdress";


 export interface User extends Document {
    name: string;
    address: Address[];
    lastName: string;
    phone: number;
    email: string;
    password: string;
}


const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: [{
        type: Schema.Types.ObjectId,
        ref: "Address",
        required: true,
      }]
});      

const UserModel = model<User>("User", userSchema);

export default UserModel;