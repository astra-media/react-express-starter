import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

//createApi makes asynchronus request
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseURL: BASE_URL }),
  tagTypes: ['Features'],
  endpoints: (builder) => ({}),
})
