const formatReservationTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const endTime = new Date(1970, 0, 1, hours, minutes + 30);
  const formattedEndTime = `${endTime.getHours()}:${
    endTime.getMinutes() === 0 ? "00" : endTime.getMinutes()
  }`;
  return `${time} ~ ${formattedEndTime}`;
};

export default formatReservationTime;
