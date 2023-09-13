import { User } from '../../../model/user';
import { Event } from '../../../model/event';

export interface EventState {
  guests: User[];
  events: Event[];
}

export enum EventActionEnum {
  SET_GUESTS = 'SET_GUESTs',
  SET_EVENT = 'SET_EVENT',
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS;
  payload: User[];
}

export interface SetEventAction {
  type: EventActionEnum.SET_EVENT;
  payload: Event[];
}

export type EventActionType = SetGuestsAction | SetEventAction;
