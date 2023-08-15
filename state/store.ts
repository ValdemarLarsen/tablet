import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./reducers/app"
import userReducer from "./reducers/user"


const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch