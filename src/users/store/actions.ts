import { getUsers } from './../../api/users';
import IUser from "../types/IUser";
import { IGetUsersAction, LOADING_USERS_SUCCESS, LOADING_USERS_FAILURE, LOADING_USERS } from './types';
import { ThunkDispatch } from 'redux-thunk'

export const fetchUsers = (): (dispatch: ThunkDispatch<{}, {}, IGetUsersAction>) => void => {
    return async (dispatch: ThunkDispatch<{}, {}, IGetUsersAction>): Promise<void> => {
        dispatch(getUsersLoading())
        try {
            const users: IUser[] = await getUsers();
            dispatch(getUsersSuccess(users))
        } catch(error) {
            dispatch(getUsersFailure())
        }
    }
}

function getUsersSuccess(users: IUser[]): IGetUsersAction {
    return {
      type: LOADING_USERS_SUCCESS,
      payload: users
    }
}

function getUsersFailure(): IGetUsersAction {
    return {
        type: LOADING_USERS_FAILURE,
        payload: "Could not fetch users."
    }
}

function getUsersLoading(): IGetUsersAction {
    return {
        type: LOADING_USERS
    }
}