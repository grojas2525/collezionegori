import { ARTWORKS } from "../../app/shared/ARTWORKS";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    artworksArray: ARTWORKS
};

const artworksSlice = createSlice({
    name: 'artworks',
    initialState
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
