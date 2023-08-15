import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/app"
import brugerdata from "./reducers/brugerdata"

const store = configureStore({
  reducer: {
    app: appReducer,
    user: brugerdata
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch