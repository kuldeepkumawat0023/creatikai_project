import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    Image: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        default: "",
    },
    number: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        default: "",
    },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
