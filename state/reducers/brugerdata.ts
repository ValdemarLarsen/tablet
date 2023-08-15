import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
    username: string | null
    password: string | null
    fullName: string | null
}

const initialState: IUserState = {
    username: null,
    password: null,
    fullName: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUserState>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        resetUserData: () => initialState
    },
})

export const { setUserData, resetUserData } = userSlice.actions

export default userSlice.reducer;
