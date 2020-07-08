import IUser from "../users/types/IUser";
import axios from "axios";
import { resolveAxiosResponse } from "./common";

const API_URL: string = "https://jsonplaceholder.typicode.com";

export const getUsers: () => Promise<IUser[]> = async () => {
    return resolveAxiosResponse<IUser[]>(await axios.get(`${API_URL}/users`))
}