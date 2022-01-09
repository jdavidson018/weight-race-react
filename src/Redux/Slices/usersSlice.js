import { createSlice } from "@reduxjs/toolkit"
import UserService from "../../Services/UserService"
import WeightService from "../../Services/WeightService"

// First, define the reducer and action creators via `createSlice`
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: 'idle',
        users: [],
        loadingActiveUser: 'idle',
        activeUser: null,
        loadingActiveUserWeights: 'idle',
    },
    reducers: {
        usersLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        },
        usersReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.users = action.payload
            }
        },
        activeUserLoading(state, action) {
            if (state.loadingActiveUser === 'idle') {
                state.loadingActiveUser = 'pending'
            }
        },
        activeUserReceived(state, action) {
            if (state.loadingActiveUser === 'pending') {
                state.loadingActiveUser = 'idle'
                state.activeUser = action.payload
            }
        },
        activeUserWeightsLoading(state, action) {
            if (state.loadingActiveUserWeights === 'idle') {
                state.loadingActiveUserWeights = 'pending'
            }
        },
        activeUserWeightsReceived(state, action) {
            if (state.loadingActiveUserWeights === 'pending') {
                state.loadingActiveUserWeights = 'idle'
                state.activeUser.weights = action.payload
            }
        }
    },
})

// Destructure and export the plain action creators
export const { usersLoading,
    usersReceived,
    activeUserLoading,
    activeUserReceived,
    activeUserWeightsLoading,
    activeUserWeightsReceived } = usersSlice.actions

// Define a thunk that dispatches those action creators
export const fetchUsers = () => async (dispatch) => {
    dispatch(usersLoading());
    const response = await UserService.getUsers();
    dispatch(usersReceived(response));
}

export const fetchActiveUser = (userId) => async (dispatch) => {
    dispatch(activeUserLoading());
    const response = await UserService.getUserById(userId);
    dispatch(activeUserReceived(response));
}

export const addActiveUserWeight = (weight) => async (dispatch) => {
    dispatch(activeUserWeightsLoading());
    await WeightService.createWeight(weight);
    const response = await WeightService.getUserWeights(weight.userId);
    dispatch(activeUserWeightsReceived(response));
}

export default usersSlice.reducer