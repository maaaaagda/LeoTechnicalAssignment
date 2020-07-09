import { IGetUsersAction, LOADING_USERS, LOADING_USERS_SUCCESS, LOADING_USERS_FAILURE, IUsersState } from './types';

export const initialUsersState: IUsersState = {
    loading: false,
    users: [],
    error: ""
}

export function usersReducer(state = initialUsersState, action: IGetUsersAction) {
  switch (action.type) {
    case LOADING_USERS:
      return {...state, loading: true, users: [] };
	case LOADING_USERS_SUCCESS:
      return {...state, loading: false, users: action.payload};
    case LOADING_USERS_FAILURE:
        return {...state, loading: false};
    default:
      return state;
  }
}