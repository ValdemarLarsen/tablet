import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IAppState {
    navn: string
}

const initialState: IAppState = {
    navn: ""
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: () => initialState,
        setState: (state, action: PayloadAction<IAppState>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        setNavn: (state, action: PayloadAction<string>) => {
            state.navn = action.payload
        }
    },
})


export const {resetState, setNavn}= userSlice.actions

export default userSlice.reducer