import IUser from "../types/IUser";

export const LOADING_USERS = "LOADING_USERS";
export const LOADING_USERS_SUCCESS = "LOADING_USERS_SUCCESS";
export const LOADING_USERS_FAILURE = "LOADING_USERS_FAILURE";

interface IGetUsersLoading {
    type: typeof LOADING_USERS
}

interface IGetUsersSuccessAction {
    type: typeof LOADING_USERS_SUCCESS,
    payload: IUser[]
}

interface IGetUsersFailureAction {
    type: typeof LOADING_USERS_FAILURE,
    payload: string
}

export interface IUsersState {
    loading: boolean,
    users: IUser[],
    error: string
}

export type IGetUsersAction = IGetUsersLoading | IGetUsersSuccessAction | IGetUsersFailureAction;