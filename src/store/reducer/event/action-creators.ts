import { AppDispatch } from '../..';
import { UserService } from '../../../api/userService';
import { Event } from '../../../model/event';
import { User } from '../../../model/user';
import { EventActionEnum, SetEventAction, SetGuestsAction } from './types';

export const EventActions = {
  setGuests: (guests: User[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload: guests,
  }),
  setEvents: (events: Event[]): SetEventAction => ({
    type: EventActionEnum.SET_EVENT,
    payload: events,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const { data } = await UserService.fetchUsers();
      dispatch(EventActions.setGuests(data));
    } catch (error) {
      console.log('Something went wrong');
    }
  },
};
