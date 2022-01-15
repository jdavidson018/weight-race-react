import { createSlice } from "@reduxjs/toolkit"
import UserService from "../../Services/UserService"
import WeightService from "../../Services/WeightService"

// First, define the reducer and action creators via `createSlice`
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: 'unloaded',
        users: [],
        loadingActiveUser: 'unloaded',
        activeUser: null,
        loadingActiveUserWeights: 'unloaded',
        activeUserFriends: [],
        loadingActiveUserFriends: 'unloaded',
    },
    reducers: {
        usersLoading(state, action) {
            // Use a "state machine" approach for loading state instead of booleans
            if (['idle', 'unloaded'].includes(state.loading)) {
                state.loading = 'pending'
            }
        },
        usersReceived(state, action) {
            if (state.loading === 'pending') {
                state.users = action.payload
                state.loading = 'idle'
            }
        },
        activeUserLoading(state, action) {
            if (['idle', 'unloaded'].includes(state.loadingActiveUser)) {
                state.loadingActiveUser = 'pending'
            }
        },
        activeUserReceived(state, action) {
            if (state.loadingActiveUser === 'pending') {
                state.activeUser = action.payload
                state.loadingActiveUser = 'idle'
            }
        },
        activeUserWeightsLoading(state, action) {
            if (['idle', 'unloaded'].includes(state.loadingActiveUserWeights)) {
                state.loadingActiveUserWeights = 'pending'
            }
        },
        activeUserWeightsReceived(state, action) {
            if (state.loadingActiveUserWeights === 'pending') {
                state.activeUser.weights = action.payload
                state.loadingActiveUserWeights = 'idle'
            }
        },
        activeUserFriendsLoading(state, action) {
            if (['idle', 'unloaded'].includes(state.loadingActiveUserFriends)) {
                state.loadingActiveUserFriends = 'pending'
            }
        },
        activeUserFriendsReceived(state, action) {
            if (state.loadingActiveUserFriends === 'pending') {
                state.activeUserFriends = action.payload
                state.loadingActiveUserFriends = 'idle'
            }
        },
    },
})

// Destructure and export the plain action creators
export const { usersLoading,
    usersReceived,
    activeUserLoading,
    activeUserReceived,
    activeUserWeightsLoading,
    activeUserWeightsReceived,
    activeUserFriendsLoading,
    activeUserFriendsReceived } = usersSlice.actions

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

export const updateActiveUserWeight = (weight) => async (dispatch) => {
    dispatch(activeUserWeightsLoading());
    await WeightService.updateWeight(weight, weight.weightId);
    const response = await WeightService.getUserWeights(weight.userId);
    dispatch(activeUserWeightsReceived(response));
}

export const deleteActiveUserWeight = (weight) => async (dispatch) => {
    dispatch(activeUserWeightsLoading());
    await WeightService.deleteWeight(weight.weightId);
    const response = await WeightService.getUserWeights(weight.userId);
    dispatch(activeUserWeightsReceived(response));
}

export const fetchActiveUserFriends = (userId) => async (dispatch) => {
    dispatch(activeUserFriendsLoading());
    console.log(userId);
    const response = await UserService.getUserFriends(userId);
    console.log('Hello');
    console.log(response);
    dispatch(activeUserFriendsReceived(response));
}

export default usersSlice.reducer