import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import API from 'core/services/API';

import { IAlbums } from 'shared/interfaces/Album.interface';
import { ISliceState } from 'shared/interfaces/SliceState.interface';

import { isPendingAction, isRejectedAction, isFulfilledAction } from '../helpers';

export const fetchAlbum = createAsyncThunk(
    'photo/fetchAlbum',
    async (albumIds: number[], {rejectWithValue}) => {
        try {
            const queryParams = albumIds.length > 0 ? `?ids=${albumIds.join()}` : '';
            const response = await API.get(`/api/albums${queryParams}`) as IAlbums[] | IAlbums;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
  );

export const createAlbum = createAsyncThunk(
    'photo/createAlbum',
    async (item: Omit<IAlbums, 'id'>, {rejectWithValue}) => {
        try {
            const response = await API.post('/api/albums', item) as IAlbums;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateAlbum = createAsyncThunk(
    'photo/updateAlbum',
    async (item: IAlbums, {rejectWithValue}) => {
        try {
            const response = await API.patch('/api/albums', item) as IAlbums;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const removeAlbum = createAsyncThunk(
    'photo/removeAlbum',
    async (id: number[], {rejectWithValue}) => {
        try {
            const response = await API.delete(`/api/albums?ids=${id}`);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


const initialState: ISliceState<IAlbums> = {
    status: 'idle',
    error: null,
    data: [],
  };


const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbum.fulfilled, (state, action) => {
                state.data = Array.isArray(action.payload) ? [...action.payload] : [action.payload];
            })
            .addCase(createAlbum.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(updateAlbum.fulfilled, (state, action) => {
                state.data.forEach(album => {
                    return album.id === action.payload.id ? album : action.payload;
                });
            })
            .addCase(removeAlbum.fulfilled, (state, action) => {
                state.data = state.data.filter( album => album.id !== action.payload.id);
            })
            .addMatcher(isPendingAction, state => {
                state.status = 'pending';
                state.error = null;
            })
            .addMatcher(isRejectedAction, (state, action: AnyAction) => {
                state.status = 'failed';
                state.error = action.payload.message;
            })
            .addMatcher(isFulfilledAction, state => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addDefaultCase(() => initialState);
    },
});

export default albumSlice.reducer;
