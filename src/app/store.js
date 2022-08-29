import { configureStore } from '@reduxjs/toolkit';
import {artworksReducer} from '../features/artworks/ArtworksSlice';

export const store = configureStore({
  reducer: {
    artworks: artworksReducer,
  },
});
