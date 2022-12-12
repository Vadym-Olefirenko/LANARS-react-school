import { createSlice } from '@reduxjs/toolkit';

import { IPhoto } from 'shared/interfaces/Photo.interface';
import { ISliceState } from 'shared/interfaces/SliceState.interface';

const initialState: ISliceState<IPhoto> = {
    status: 'idle',
    error: null,
    data: [],
  };

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {},
    extraReducers: () => {},
});

export default photoSlice.reducer;
