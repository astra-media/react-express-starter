import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('localList')
  ? JSON.parse(localStorage.getItem('localList'))
  : { listItems: [] }

const localListSlice = createSlice({
  name: 'localList',
  initialState,
  reducers: {
    addToLocalList: (state, action) => {
      const item = action.payload
      const existItem = state.listItems.find((x) => x.name === item.name)

      if (existItem) {
        state.listItems = state.listItems.map((x) =>
          x.name === existItem.name ? item : x
        )
      } else {
        state.listItems = [...state.listItems, item]
      }
      localStorage.setItem('localList', JSON.stringify(state))
    },
    clearLocalList: (state, action) => {
      state.listItems = []
      localStorage.setItem('localList', [])
    },
  },
})

export const { addToLocalList, clearLocalList } = localListSlice.actions
export default localListSlice.reducer
