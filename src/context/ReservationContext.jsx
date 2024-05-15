import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
export const ReservationProvider = ({ children }) => {
  const [selectedTime, setSelectedTime] = useState({
    selectedTime: null,
    month: null,
    day: null,
    date: null,
  });

  return (
    <ReservationContext.Provider value={{ selectedTime, setSelectedTime }}>
      {children}
    </ReservationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedTime = () => {
  return useContext(ReservationContext);
};
