import { configureStore } from '@reduxjs/toolkit';
import {artworksReducer} from '../features/artworks/ArtworksSlice';
import { artistsReducer } from '../features/artists/artistsSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';

export const store = configureStore({
  reducer: {
    artworks: artworksReducer,
    artists: artistsReducer,
    promotions: promotionsReducer
  },
});
