import { ARTWORKS } from "../../app/shared/ARTWORKS";
import createSlice from "@reduxjs/toolkit";

const initialState = {
    artworksArray: ARTWORKS
};

const artworksSlice = createSlice({
    name: 'artworks',
    initialState
});

export const artworksReducer = artworksSlice.reducer;

export const selectAllArtworks = () => {
    return ARTWORKS
};

//export const selectRandomArtwork = () => {
 //   return ARTWORKS[Math.floor(ARTWORKS.length * Math.random())];
//};

export const selectArtworkById = (id) => {
    return ARTWORKS.find((artwork) => artwork.id === parseInt(id));
};

export const selectFeaturedArtwork = () => {
    return ARTWORKS.find((artwork) => artwork.featured);
};



