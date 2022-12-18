import { RegisterUserData } from '../Types/auth';
import { create } from "apisauce";

const API = create( {baseURL: "https://studapi.teachmeskills.by"})

const registerUser = (data: RegisterUserData) => {
    return API.post("/auth/users/", data)
}

const getAllPosts = () => {
    return API.get("/blog/posts/?limit=11")
}

export default {
    registerUser,
    getAllPosts
}