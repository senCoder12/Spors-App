import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:8080"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  });

export const signIn = (FormData) => API.post("/user/signin",FormData);
export const signUp = (FormData) => API.post("/user/signup",FormData);
export const updateRequestPending = (updatedData) => API.patch(`/user/update`,updatedData);


export const createEvent = (updatedeventData) => API.post("/event",updatedeventData);
export const getEvents = () => API.get(`/event`);
export const getEvent = (id) => API.get(`/event/${id}`);
export const getOwnerEvents = () => API.get(`/event/ownerEvents`);
export const updateEvent = (updatedData,eventId)  => API.patch(`/event/${eventId}`,updatedData);
export const getEventsBySearch = (searchQuery) => API.get(`/event/search/${searchQuery}`);