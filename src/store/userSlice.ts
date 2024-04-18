import { usersList } from './../mockData';
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
export interface Users {
    id: number,
    first: string,
    last: string,
    dob: string,
    gender: string,
    email: string,
    picture: string,
    country: string,
    description: string,
}

interface UsersState {
    users: Users[]
}

const initialState: UsersState = {
    users: usersList
}

export const UsersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        deleteUser: (state, action: PayloadAction<{id:number}>) => {
            state.users = state.users.filter((x: any) => x.id !== action.payload.id);
        },
        updateUserData: (state, action) => {
            state.users.map((user) => {
              if (user.id === action.payload.id) {
                user.gender = action.payload.gender;
                user.country = action.payload.country;
                user.description = action.payload.description;
              }
            });
        }
    }
})

export default UsersSlice.reducer;
export const { deleteUser, updateUserData } = UsersSlice.actions;