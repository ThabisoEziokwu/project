import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const History = () => {
  const { appointments } = useContext(AppContext);

  return (
    <div>
      <h2>Appointment History</h2>
      {appointments.completed.length > 0 ? (
        appointments.completed.map((appointment) => (
          <div key={appointment.id}>
            <p>{appointment.date}: {appointment.patientName}</p>
          </div>
        ))
      ) : (
        <p>No appointment history available.</p>
      )}
    </div>
  );
};

export default History;
