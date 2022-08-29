import { ARTISTS } from "../../app/shared/ARTISTS";
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    artistsArray: ARTISTS
};

const artistsSlice = createSlice({
    name: 'artists',
    initialState
});

export const artistsReducer = artistsSlice.reducer;

export const selectAllArtists = (state) => {
    return state.artists.artistsArray;
};

export const selectFeaturedArtist = (state) => {
    return state.artists.artistsArray.find((artist) => artist.featured);
};


