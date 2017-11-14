/*
  Keeps the state of modals inside of redux
 */
import * as types from '../actions/types';

export const ui = (state = {
  exerciseModal: false
}, { type, payload }) => {

  switch (type) {
    case types.SET_EXERCISE_VISIBILITY:
      return {
        ...state,
        exerciseModal: payload
      };
    default:
      return state;
  }
};