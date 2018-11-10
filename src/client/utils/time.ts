export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hoursPad = hours.toString().padStart(2, '0');
  const minutesPad = minutes.toString().padStart(2, '0');

  return `${hoursPad}:${minutesPad}`;
};
