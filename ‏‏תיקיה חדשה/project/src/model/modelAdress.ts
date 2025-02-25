import { Schema, model, Document } from "mongoose";


 export interface Address extends Document {
 address: string;
    city: string;
    zipCode: number;
}

const addressSchema = new Schema<Address>({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    }
})

const AddressModel = model<Address>("Address", addressSchema);

export default AddressModel;