export interface ISliceState<T> {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: null | string;
    data: T[] | T;
}
