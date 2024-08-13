import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const doctorName = 'Dr. Smith'; // Replace with actual doctor's name

const appointments = [
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
];

const requests = [
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
];

const Home = () => {
  const [showRequests, setShowRequests] = useState(false);

  const toggleRequests = () => {
    setShowRequests(!showRequests);
  };

  return (
    <div className="home">
      <h1 className='huge'>Welcome, {doctorName}!</h1>
      <p className="appointments-info">
        You have <Link to="/appointments" className='link'>1 appointment</Link> for today.
      </p>
      <h2 className="subheading">Upcoming Appointment</h2>
      <hr className="divider" />

      <div className="appointments-list">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-box">
            <div className="appointment-column">
              <div className="appointment-date">
                <div className="day">{appointment.day}</div>
                <div className="date">{appointment.date}</div>
                <div className="time">{appointment.time}</div>
              </div>
            </div>
            <div className="divider-vertical" />
            <div className="appointment-column">
              <div className="appointment-info">
                <div className="name">{appointment.name}</div>
                <div className="purpose">{appointment.purpose}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-appointments">
        <div className="header">
          <span className='recent-ann'>Recent Appointments</span>
          <span className="requests" onClick={toggleRequests}>
            {showRequests ? 'Appointments' : 'Requests'}
          </span>
          <Link to="/appointments" className="view-all link">View all</Link>
        </div>
        <hr className="divider-dark" />

        {showRequests ? (
          <div className="requests-list">
            {requests.map((request, index) => (
              <div key={index} className="request-box">
                <div className="appointment-column">
                  <div className="appointment-date">
                    <div className="day">{request.day}</div>
                    <div className="date">{request.date}</div>
                    <div className="time">{request.time}</div>
                  </div>
                </div>
                <div className="divider-vertical-2" />
                <div className="appointment-column">
                  <div className="appointment-info">
                    <div className="name">{request.name}</div>
                    <div className="purpose">{request.purpose}</div>
                  </div>
                </div>
                <div className="action-column">
                  <button className="btn accept">Accept</button>
                  <button className="btn reject">Reject</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patients</th>
                <th>Date</th>
                <th>Time</th>
                <th>Purpose</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows with random data */}
              <tr>
                <td>John Doe</td>
                <td>24 Oct</td>
                <td>9:00 am - 10:00 am</td>
                <td>Consultation</td>
                <td><span className="badge badge-approved">Approved</span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>25 Oct</td>
                <td>10:00 am - 11:00 am</td>
                <td>Checkup</td>
                <td><span className="badge badge-declined">Declined</span></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
