import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { doctorName, appointments } = useContext(AppContext);

  return (
    <div>
      <h1>Welcome, {doctorName}!</h1>
      <section>
        <h2>Upcoming Appointments</h2>
        {appointments.upcoming.length > 0 ? (
          appointments.upcoming.map((appointment) => (
            <div key={appointment.id}>
              <p>{appointment.date}: {appointment.patientName}</p>
            </div>
          ))
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </section>
      <section>
        <h2>Recent Appointments</h2>
        {appointments.recent.length > 0 ? (
          appointments.recent.map((appointment) => (
            <div key={appointment.id}>
              <p>{appointment.date}: {appointment.patientName} - {appointment.status}</p>
            </div>
          ))
        ) : (
          <p>No recent appointments.</p>
        )}
      </section>
    </div>
  );
};

export default Home;