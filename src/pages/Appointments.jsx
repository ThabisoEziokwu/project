import React, { useState } from 'react';
import './Appointments.css';

const tabs = ['Requests', 'Approved', 'Declined', 'Completed'];

const tabData = {
  Requests: [
    {
      day: 'Monday',
      date: '24 Oct',
      time: '9:00 am - 10:00 am',
      name: 'Mr Mike',
      purpose: 'Consultation',
    },
    {
      day: 'Tuesday',
      date: '25 Oct',
      time: '10:00 am - 11:00 am',
      name: 'Jane Doe',
      purpose: 'Checkup',
    },
    {
      day: 'Wednesday',
      date: '26 Oct',
      time: '11:00 am - 12:00 pm',
      name: 'Alex Smith',
      purpose: 'Consultation',
    },
    {
      day: 'Thursday',
      date: '27 Oct',
      time: '1:00 pm - 2:00 pm',
      name: 'John Doe',
      purpose: 'Routine Checkup',
    },
  ],
  Approved: [
    {
      day: 'Friday',
      date: '28 Oct',
      time: '2:00 pm - 3:00 pm',
      name: 'Emily Davis',
      purpose: 'Follow-up',
    },
    {
      day: 'Saturday',
      date: '29 Oct',
      time: '3:00 pm - 4:00 pm',
      name: 'Michael Brown',
      purpose: 'Consultation',
    },
  ],
  Declined: [
    {
      day: 'Sunday',
      date: '30 Oct',
      time: '4:00 pm - 5:00 pm',
      name: 'Linda Johnson',
      purpose: 'Checkup',
    },
    {
      day: 'Monday',
      date: '31 Oct',
      time: '5:00 pm - 6:00 pm',
      name: 'James Wilson',
      purpose: 'Routine Checkup',
    },
  ],
  Completed: [
    {
      day: 'Tuesday',
      date: '01 Nov',
      time: '10:00 am - 11:00 am',
      name: 'Sophia Martinez',
      purpose: 'Consultation',
    },
    {
      day: 'Wednesday',
      date: '02 Nov',
      time: '11:00 am - 12:00 pm',
      name: 'Daniel Garcia',
      purpose: 'Follow-up',
    },
  ],
};

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('Requests');

  return (
    <div className="appointments-page">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="appointments-list">
        {tabData[activeTab].map((appointment, index) => (
          <div key={index} className="appointment-box">
            <div className="appointment-column">
              <div className="appointment-date">
                <div className="day">{appointment.day}</div>
                <div className="date">{appointment.date}</div>
                <div className="time">{appointment.time}</div>
              </div>
            </div>
            <div className="divider-vertical-2" />
            <div className="appointment-column">
              <div className="appointment-info">
                <div className="name">{appointment.name}</div>
                <div className="purpose">{appointment.purpose}</div>
              </div>
            </div>
            {activeTab === 'Requests' && (
              <div className="action-column">
                <button className="btn accept">Accept</button>
                <button className="btn reject">Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;
