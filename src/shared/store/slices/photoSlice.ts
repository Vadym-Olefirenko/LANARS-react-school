import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from 'core/services/API';

import { IPhoto } from 'shared/interfaces/Photo.interface';
import { ISliceState } from 'shared/interfaces/SliceState.interface';

export const fetchPhoto = createAsyncThunk(
    'photo/fetchPhoto',
    async (photoIds: number[], {rejectWithValue}) => {
        try {
            const queryParams = photoIds.length > 0 ? `?ids=${photoIds.join()}` : '';
            const response = await API.get(`/api/photos${queryParams}`) as IPhoto[] | IPhoto;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
  );

export const createPhoto = createAsyncThunk(
    'photo/createPhoto',
    async (item: Omit<IPhoto, 'id'>, {rejectWithValue}) => {
        try {
            const response = await API.post('/api/photos', item) as IPhoto;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updatePhoto = createAsyncThunk(
    'photo/updatePhoto',
    async (item: IPhoto, {rejectWithValue}) => {
        try {
            const response = await API.patch('/api/photos', item) as IPhoto;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const removePhoto = createAsyncThunk(
    'photo/removePhoto',
    async (id: number[], {rejectWithValue}) => {
        try {
            const response = await API.delete(`/api/photos?ids=${id}`);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState: ISliceState<IPhoto> = {
    status: 'idle',
    error: null,
    data: [],
  };

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhoto.fulfilled, (state, action) => {
                state.data = Array.isArray(action.payload) ? [...action.payload] : [action.payload];
            })
            .addCase(createPhoto.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(updatePhoto.fulfilled, (state, action) => {
                state.data.forEach(photo => {
                    return photo.id === action.payload.id ? photo : action.payload;
                });
            })
            .addCase(removePhoto.fulfilled, (state, action) => {
                state.data = state.data.filter( photo => photo.id !== action.payload.id);
            });
    },
});

export default photoSlice.reducer;
