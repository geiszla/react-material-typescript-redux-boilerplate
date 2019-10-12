/* eslint import/prefer-default-export: 0 */

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface User {
    email: string;
    password: string;
}

export enum ActionType {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}
