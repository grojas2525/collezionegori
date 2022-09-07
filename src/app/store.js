import { configureStore } from '@reduxjs/toolkit';
import {artworksReducer} from '../features/artworks/ArtworksSlice';
import { artistsReducer } from '../features/artists/artistsSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    artworks: artworksReducer,
    artists: artistsReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
