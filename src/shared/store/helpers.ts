import { AsyncThunk, AnyAction } from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type ActionStateType = {
    status: string;
    error: null | string;
};

export function isPendingAction(action: AnyAction): action is PendingAction {
    return action.type.endsWith('/pending');
}

export function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('/rejected');
}

export function isFulfilledAction(action: AnyAction): action is FulfilledAction {
    return action.type.endsWith('/fulfilled');
}

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
