import { Button, Layout, Row, Modal } from 'antd';
import { EventsCalendar } from '../components/EventsCalendar';
import { useEffect, useState } from 'react';
import { EventForm } from '../components/EventForm';
import { useActions } from '../hooks/useActions';

export const EventPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { fetchGuests } = useActions();
  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <Layout.Content className='h100'>
      <EventsCalendar events={[]} />
      <Row justify='center' style={{ marginTop: '10px' }}>
        <Button onClick={() => setIsModalVisible(true)}>Add New Event</Button>
      </Row>
      <Modal
        title='Create New Event'
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <EventForm />
      </Modal>
    </Layout.Content>
  );
};
