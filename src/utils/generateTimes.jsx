const generateTimes = (startHour, endHour) => {
  const times = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    times.push(`${hour}:00`);
    if (hour !== endHour) {
      times.push(`${hour}:30`);
    }
  }
  return times;
};

export default generateTimes;
