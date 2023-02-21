import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SET_FETCHED_GREETING = 'helloRailsReact/greetings/setFetchedGreeting';

const apiURL = 'http://127.0.0.1:3000/api/v1/messages';

export const fetchGreeting = createAsyncThunk(
  SET_FETCHED_GREETING,
  async () => {
    const greeting = await axios.get(apiURL);
    return greeting.data.Message;
  },
);

const greetingsReducer = (greetings = [], action) => {
  switch (action.type) {
    case `${SET_FETCHED_GREETING}/fulfilled`:
      return action.payload;
    default:
      return greetings;
  }
};

export default greetingsReducer;
