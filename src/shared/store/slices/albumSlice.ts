import {  createSlice } from '@reduxjs/toolkit';

import { IAlbums } from 'shared/interfaces/Album.interface';
import { ISliceState } from 'shared/interfaces/SliceState.interface';


const initialState: ISliceState<IAlbums> = {
    status: 'idle',
    error: null,
    data: [],
  };


const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {},
    extraReducers: () => {},
});

export default albumSlice.reducer;
