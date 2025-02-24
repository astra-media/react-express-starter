import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import localListReducer from './slices/localListSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    localList: localListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
