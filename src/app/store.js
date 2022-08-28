import { configureStore } from '@reduxjs/toolkit';
import artworksReducer from '../features/artworks/artworksSlice';

export const store = configureStore({
  reducer: {
    artworks: artworksReducer,
  },
});
