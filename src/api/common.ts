import { AxiosResponse } from "axios"

export function resolveAxiosResponse<T> (response: AxiosResponse<T>): T {
    return response.data;
}