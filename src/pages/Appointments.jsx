import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Appointments = () => {
  const { appointments, handleApproveRequest, handleDeclineRequest } = useContext(AppContext);

  return (
    <div>
      <h2>Appointment Requests</h2>
      {appointments.requests.length > 0 ? (
        appointments.requests.map((appointment) => (
          <div key={appointment.id}>
            <p>{appointment.date}: {appointment.patientName}</p>
            <button onClick={() => handleApproveRequest(appointment.id)}>Approve</button>
            <button onClick={() => handleDeclineRequest(appointment.id)}>Decline</button>
          </div>
        ))
      ) : (
        <p>No appointment requests.</p>
      )}

      <h2>Approved Appointments</h2>
      {appointments.approved.length > 0 ? (
        appointments.approved.map((appointment) => (
          <div key={appointment.id}>
            <p>{appointment.date}: {appointment.patientName}</p>
          </div>
        ))
      ) : (
        <p>No approved appointments.</p>
      )}

      <h2>Declined Appointments</h2>
      {appointments.declined.length > 0 ? (
        appointments.declined.map((appointment) => (
          <div key={appointment.id}>
            <p>{appointment.date}: {appointment.patientName}</p>
          </div>
        ))
      ) : (
        <p>No declined appointments.</p>
      )}

      <h2>Completed Appointments</h2>
      {appointments.completed.length > 0 ? (
        appointments.completed.map((appointment) => (
          <div key={appointment.id}>
            <p>{appointment.date}: {appointment.patientName}</p>
          </div>
        ))
      ) : (
        <p>No completed appointments.</p>
      )}
    </div>
  );
};

export default Appointments;
