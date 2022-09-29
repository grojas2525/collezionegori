//import { ARTWORKS } from "../../app/shared/oldData/ARTWORKS";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchArtworks = createAsyncThunk(
    'artworks/fetchArtworks',
    async () => {
        const response = await fetch(baseUrl + 'artworks');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    artworksArray: [],
    isLoading: true,
    errMsg: ''
};

const artworksSlice = createSlice({
    name: 'artworks',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchArtworks.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchArtworks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.artworksArray = mapImageURL(action.payload);
        },
        [fetchArtworks.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const artworksReducer = artworksSlice.reducer;

export const selectAllArtworks = (state) => {
    return state.artworks.artworksArray;
};

export const selectArtworkById = (id) => (state) => {
    return state.artworks.artworksArray.find((artwork) => artwork.id === parseInt(id));
};

export const selectFeaturedArtwork = (state) => {
    return state.artworks.artworksArray.find((artwork) => artwork.featured);
};


//export const selectRandomArtwork = () => {
 //   return ARTWORKS[Math.floor(ARTWORKS.length * Math.random())];
//};
