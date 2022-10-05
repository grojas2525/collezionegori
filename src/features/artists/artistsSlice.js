//import { ARTISTS } from "../../app/shared/oldData/ARTISTS";
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchArtists = createAsyncThunk(
    'artists/fetchArtists',
    async () => {
        const response = await fetch(baseUrl + 'artists');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    artistsArray: [],
    isLoading: true,
    errMsg: ''
};

const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchArtists.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchArtists.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.artistsArray = mapImageURL(action.payload);
        },
        [fetchArtists.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const artistsReducer = artistsSlice.reducer;

export const selectAllArtists = (state) => {
    return state.artists.artistsArray;
};

export const selectFeaturedArtist = (state) => {
    return state.artists.artistsArray.find((artist) => artist.featured);
};


