import { FEATURES_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const featuresApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturesDetails: builder.query({
      query: () => ({
        url: FEATURES_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetFeaturesDetailsQuery } = featuresApiSlice
