import { EventActionEnum, EventActionType, EventState } from './types';

const initialState: EventState = {
  events: [],
  guests: [],
};

export const eventReducer = (
  state = initialState,
  action: EventActionType
): EventState => {
  switch (action.type) {
    case EventActionEnum.SET_EVENT:
      return { ...state, events: action.payload };
    case EventActionEnum.SET_GUESTS:
      return { ...state, guests: action.payload };

    default:
      return state;
  }
};
