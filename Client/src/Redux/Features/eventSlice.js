import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as api from "../api"

export const createEvent = createAsyncThunk("event/create", async({updatedEvent,navigate,toast},{rejectWithValue})=>{
    try {
        const response = await api.createEvent(updatedEvent);
        toast.success("Created successfully");
        navigate("/");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getEvents = createAsyncThunk("events/get", async(_,{rejectWithValue})=>{
    try {
        const response = await api.getEvents();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getEvent = createAsyncThunk("event/getSingleEvent", async(eventId,{rejectWithValue})=>{
    try {
        const response = await api.getEvent(eventId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getOwnerEvents = createAsyncThunk("event/getOwnerEvents", async(_,{rejectWithValue})=>{
    try {
        const response = await api.getOwnerEvents();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const updateEvent = createAsyncThunk("event/updateEvent", async({eventId,updatedEventData},{rejectWithValue})=>{
    try {
        const response = await api.updateEvent(updatedEventData,eventId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getEventsBySearch = createAsyncThunk("event/geteventsBySearch", async(searchQuery,{rejectWithValue})=>{
    try {
        const response = await api.getEventsBySearch(searchQuery);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        event: {},
        events: [],
        userEvents: [],
        error: "",
        loading: false
    },
    extraReducers: {
        [createEvent.pending] : (state,action)=> {
            state.loading = true;
        },
        [createEvent.fulfilled] : (state,action)=> {
            state.loading = false;
            // state.events = action.payload;
        },
        [createEvent.rejected] : (state,action)=> {
            state.loading = false;
            state.error = action.payload.error;
        },
        [getEvents.pending] : (state,action)=> {
            state.loading = true;
        },
        [getEvents.fulfilled] : (state,action)=> {
            state.loading = false;
            state.events = action.payload.data;
        },
        [getEvents.rejected] : (state,action)=> {
            state.loading = false;
            state.error = action.payload.error;
        },
        [getEvent.pending] : (state,action)=> {
            state.loading = true;
        },
        [getEvent.fulfilled] : (state,action)=> {
            state.loading = false;
            state.event = action.payload;
        },
        [getEvent.rejected] : (state,action)=> {
            state.loading = false;
            state.error = action.payload.error;
        },
        [getOwnerEvents.pending] : (state,action)=> {
            state.loading = true;
        },
        [getOwnerEvents.fulfilled] : (state,action)=> {
            state.loading = false;
            state.userEvents = action.payload;
        },
        [getOwnerEvents.rejected] : (state,action)=> {
            state.loading = false;
            state.error = action.payload.error;
        },
        [updateEvent.fulfilled] : (state,action)=> {
            state.loading = false;
            state.event = action.payload;
        },
        [updateEvent.rejected] : (state,action)=> {
            state.loading = false;
            state.error = action.payload.error;
        },
        [updateEvent.pending] : (state,action)=> {
            state.loading = true;
        },
        [getEventsBySearch.pending] : (state,action)=> {
            state.loading = true;
        },
        [getEventsBySearch.fulfilled] : (state,action)=> {
            state.loading = false;
            state.events = action.payload.data;
        },
        [getEventsBySearch.rejected] : (state,action)=> {
            state.loading = false;
            state.error = action.payload.error;
        }
    }
})

export default eventSlice.reducer;