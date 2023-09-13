import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Event } from '../model/event';

export const EventForm = () => {
  const [event, setEvent] = useState<Event>({
    date: '',
    description: '',
    guest: '',
    title: '',
  });
  const { guests } = useTypedSelector((state) => state.event);
  console.log(event);

  return (
    <Form>
      <Form.Item
        label='Event'
        name='event'
        rules={[{ required: true, message: 'This value is required!' }]}
      >
        <Input
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label='Date'
        name='date'
        rules={[{ required: true, message: 'This value is required!' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label='Guest'
        name='guest'
        rules={[{ required: true, message: 'This value is required!' }]}
      >
        <Select
          style={{ width: 120 }}
          value={event.guest}
          onChange={(value) => setEvent({ ...event, guest: value })}
          options={guests.map((guest) => ({
            value: guest.username,
            label: guest.username,
          }))}
        />
      </Form.Item>
      <Form.Item>
        <Row justify='end'>
          <Button type='primary' htmlType='submit'>
            Create Event
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};
