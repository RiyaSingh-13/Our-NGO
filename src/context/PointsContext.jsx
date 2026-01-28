import React, { createContext, useContext, useState } from "react";

const PointsContext = createContext();

export const usePoints = () => useContext(PointsContext);

export const PointsProvider = ({ children }) => {
  // For demo: store points in state. In real app, use backend or persistent storage.
  const [points, setPoints] = useState({ donor: 0, volunteer: 0 });

  const addDonorPoints = (amount = 10) => {
    setPoints((prev) => ({ ...prev, donor: prev.donor + amount }));
  };

  const addVolunteerPoints = (amount = 10) => {
    setPoints((prev) => ({ ...prev, volunteer: prev.volunteer + amount }));
  };

  return (
    <PointsContext.Provider
      value={{ points, addDonorPoints, addVolunteerPoints }}
    >
      {children}
    </PointsContext.Provider>
  );
};
