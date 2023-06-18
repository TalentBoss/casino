import {
  GET_CHARACTERS,
  CHARACTER_ERROR
} from '../actions/types';

const initialState = {
  character: null,
  characters: [],
  repos: [],
  loading: true,
  error: {}
};

function characterReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default characterReducer;
