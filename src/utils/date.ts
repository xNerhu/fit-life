export const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const getFirstDayOfMonth = (month: number, year: number) => {
  const day = new Date(year, month - 1, 1).getDay();
  return changeDayIndex(day);
};

export const getLastDayOfMonth = (month: number, year: number) => {
  const day = new Date(year, month, 0).getDay();
  return changeDayIndex(day);
};

export const changeDayIndex = (index: number) => {
  index--;
  if (index === -1) index = 6;
  return index;
};
