import { ARTWORKS } from "../../app/shared/ARTWORKS";

export const selectAllArtworks = () => {
    return ARTWORKS
};

export const selectRandomArtwork = () => {
    return ARTWORKS[Math.floor(ARTWORKS.length * Math.random())];
};