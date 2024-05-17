import { useState } from "react";

const useSelectedTimes = () => {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleSelectTime = (time) => {
    setSelectedTimes((prevSelected) =>
      prevSelected.includes(time)
        ? prevSelected.filter((t) => t !== time)
        : [...prevSelected, time]
    );
  };

  return { selectedTimes, handleSelectTime };
};

export default useSelectedTimes;
