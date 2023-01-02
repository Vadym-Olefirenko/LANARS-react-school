import { AsyncThunk, AnyAction } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type ActionStateType = {
    status: string;
    error: null | string;
};

export const isPendingAction = (param: string) => (action: AnyAction): action is PendingAction => {
    return action.type.startsWith(param) && action.type.endsWith('/pending');
};

export const isRejectedAction = (param: string) => (action: AnyAction): action is RejectedAction => {
    return action.type.startsWith(param) && action.type.endsWith('/rejected');
};

export const isFulfilledAction = (param: string) => (action: AnyAction): action is FulfilledAction => {
    return action.type.startsWith(param) && action.type.endsWith('/fulfilled');
};

export function isPendingActionStatusManager(state: ActionStateType): void {
    state.status = 'pending';
    state.error = null;
}

export function isFulfilledActionStatusManager(state: ActionStateType): void {
    state.status = 'succeeded';
    state.error = null;
}

export function isRejectedActionStatusManager(state: ActionStateType, action: AnyAction): void {
    state.status = 'failed';
    state.error = action.payload.message;
}
