import { Calendar } from 'antd';
import { Event } from '../model/event';

interface EventsCalendarProps {
  events: Event[];
}

export const EventsCalendar = ({ events }: EventsCalendarProps) => {
  return (
    <Calendar
      style={{
        maxWidth: '900px',
        width: '90%',
        margin: 'auto',
        padding: '20px 0',
      }}
    />
  );
};
