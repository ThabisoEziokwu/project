import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [doctorName, setDoctorName] = useState("Dr. Nwafor");
  const [appointments, setAppointments] = useState({
    upcoming: [],
    recent: [],
    requests: [],
    approved: [],
    declined: [],
    completed: [],
  });

  const handleApproveRequest = (appointmentId) => {
  };

  const handleDeclineRequest = (appointmentId) => {
  };

  const handleCompleteAppointment = (appointmentId) => {
  };

  return (
    <AppContext.Provider
      value={{
        doctorName,
        appointments,
        setAppointments,
        handleApproveRequest,
        handleDeclineRequest,
        handleCompleteAppointment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
