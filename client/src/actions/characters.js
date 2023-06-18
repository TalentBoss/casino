import api from '../utils/api';
import React from "react";
import {
  CHARACTER_ERROR,
  GET_CHARACTERS,
} from './types';

export const getCharacters = () => async (dispatch) => {
  try {
    const res = await api.post('/characters');
    dispatch({
      type: GET_CHARACTERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CHARACTER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

